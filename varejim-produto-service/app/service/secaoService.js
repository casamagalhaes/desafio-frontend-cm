import { knex } from "../config/db";

export const list = async (query) => {
  const { start = 0, limit = 10, descricao = '', ...q } = query;
  const items = await knex("secao")
    .where("descricao", "like", `%${descricao}%`)
    .andWhere(q)
    .offset(start)
    .limit(limit);
  let [total] = await knex("secao")
    .where("descricao", "like", `%${descricao}%`)
    .andWhere(q)
    .count("id");
  total = total[Object.keys(total)[0]];
  return { start, limit, items, total };
};
