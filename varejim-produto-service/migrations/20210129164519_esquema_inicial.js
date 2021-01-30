exports.up = function (knex) {
  return knex.schema
    .createTable("secao", (tb) => {
      tb.increments("id");
      tb.string("descricao").notNullable();
    })
    .createTable("produto", (tb) => {
      tb.increments("id");
      tb.string("descricao").notNullable();
      tb.integer("secao_id").references("secao.id");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produto").dropTable("secao");
};
