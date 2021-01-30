import chai from "chai";
import { knex } from "../app/config/db";

import * as service from "../app/service/produtoService";

describe("basic produto operations", () => {
  before(async () => await knex.migrate.latest());
  after(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });

  it("should list products", (done) => {
    service
      .list({})
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret).to.be.an("object");
        done();
      })
      .catch(done);
  });

  it("should find product 1005", (done) => {
    service
      .find(1005)
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret.descricao).to.equal("Feijão");
        done();
      })
      .catch(done);
  });

  it("should list products whose description contains letter 'e' ", (done) => {
    service
      .list({ descricao: "e" })
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret.total).to.be.equal(9);
        done();
      })
      .catch(done);
  });

  it("should list products using 5 as page size", (done) => {
    service
      .list({ limit: 5 })
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret.items.length).to.be.equal(5);
        done();
      })
      .catch(done);
  });

  it("should list products using 10 as start", (done) => {
    service
      .list({ start: 10 })
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret.items.length).to.be.equal(2);
        done();
      })
      .catch(done);
  });

  it("should insert a new product", (done) => {
    service
      .insert({ descricao: "Cebola", secao_id: 101 })
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret).to.be.an("array"); // ids created
        done();
      })
      .catch(done);
  });

  it("should update a product", (done) => {
    service
      .update({ descricao: "Cerveja Antártica", secao_id: 100 }, 1002)
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret).to.be.a("number"); // rows affected
        done();
      })
      .catch(done);
  });

  it("should delete a product", (done) => {
    service
      .del(1000)
      .then((ret) => {
        // console.log(ret);
        chai.expect(ret).to.be.a("number"); // rows affected
        done();
      })
      .catch(done);
  });
});
