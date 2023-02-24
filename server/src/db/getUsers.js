const knex = require("./connect");

/**
 * @typedef {{
 *  user_id: number,
 *  name: string,
 *  email: string,
 *  password: string,
 * }} User
 */
let User;

/**
 * @param {{name?: string, email?: string, tel?: number, id?: number}}
 */
const getUsers = async ({ name, email, tel, id }) => {
  const reshapedTel = parseInt(String(tel ?? -1).slice(-8));
  return await knex("users")
    .select("*")
    .where("email", email ?? "")
    .orWhere("name", name ?? "")
    .orWhere("tel", !isNaN(reshapedTel) ? reshapedTel : 0)
    .orWhere("user_id", id ?? -1);
};

module.exports = getUsers;
