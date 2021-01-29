import { knex } from "../config/db";

export const list = async (query) => {
  const { start = 0, limit = 10, descricao, ...q } = query;
  const items = await knex("produto")
    .where("descricao", "like", `%${descricao}%`)
    .andWhere(q)
    .offset(start)
    .limit(limit);
  let [total] = await knex("produto")
    .where("descricao", "like", `%${descricao}%`)
    .andWhere(q)
    .count("id");
  total = total[Object.keys(total)[0]];
  return { start, limit, items, total };
};

export const find = async (id) => {
  const [produto] = await knex("produto").where({ id });
  return produto;
};

export const insert = async (produto) => {
  return knex("produto").insert(produto);
};

export const update = async (produto, id) => {
  produto.id = id;
  return knex("produto").where({ id }).update(produto);
};

export const del = async (id) => {
  if (!id) throw new Error("Informe o id");
  return knex("produto").where({ id }).del();
};
