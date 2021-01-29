exports.up = function (knex) {
  return knex("produto").insert([
    { id: 1000, descricao: "Sorvete" },
    { id: 1001, descricao: "Pimenta" },
    { id: 1002, descricao: "Cerveja" },
    { id: 1003, descricao: "Chocolate" },
    { id: 1004, descricao: "Arroz" },
    { id: 1005, descricao: "Feijão" },
    { id: 1006, descricao: "Carne" },
    { id: 1007, descricao: "Farofa" },
    { id: 1008, descricao: "Queijo" },
    { id: 1009, descricao: "Gelatina" },
    { id: 1010, descricao: "Guaraná" },
    { id: 1011, descricao: "Peixe" }
  ]);
};

exports.down = function (knex) {
  return knex("produto").del();
};
