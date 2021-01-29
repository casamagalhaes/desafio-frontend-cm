exports.up = function (knex) {
  return knex.schema.createTable("produto", (tb) => {
    tb.increments("id");
    tb.string("descricao").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produto");
};
