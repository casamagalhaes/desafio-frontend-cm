import chai from "chai";
import chaiHttp from "chai-http";

import { app } from "../app/config/server";

chai.use(chaiHttp);

describe("basic service tests", () => {
  let req;
  before(() => {
    req = chai.request(app).keepOpen();
  });
  after(() => {
    req.close();
  });

  it("env should be test", (done) => {
    chai.expect(process.env.NODE_ENV).to.equal("test");
    done();
  });

  it("should export the app", (done) => {
    chai.expect(app.listen).to.be.a("function");
    done();
  });

  it("should be online", (done) => {
    req.get("/status").end((err, res) => {
      chai.expect(res).to.have.status(200);
      chai.expect(res.text).to.equal("ONLINE");
      done(err);
    });
  });
});
