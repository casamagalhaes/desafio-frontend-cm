exports.up = async function (knex) {
  await knex("secao").insert([
    { id: 100, descricao: "Bebidas" },
    { id: 101, descricao: "Mercearia" },
    { id: 102, descricao: "Doces" },
    { id: 103, descricao: "Frios" },
  ]);
  return await knex("produto").insert([
    { id: 1000, secao_id: 102, descricao: "Sorvete" },
    { id: 1001, secao_id: 101, descricao: "Pimenta" },
    { id: 1002, secao_id: 100, descricao: "Cerveja" },
    { id: 1003, secao_id: 102, descricao: "Chocolate" },
    { id: 1004, secao_id: 101, descricao: "Arroz" },
    { id: 1005, secao_id: 101, descricao: "Feijão" },
    { id: 1006, secao_id: 101, descricao: "Carne" },
    { id: 1007, secao_id: 101, descricao: "Farofa" },
    { id: 1008, secao_id: 101, descricao: "Queijo" },
    { id: 1009, secao_id: 102, descricao: "Gelatina" },
    { id: 1010, secao_id: 100, descricao: "Guaraná" },
    { id: 1011, secao_id: 103, descricao: "Peixe" },
  ]);
};

exports.down = async function (knex) {
  await knex("produto").del();
  return await knex("secao").del();
};
