const knex = require("./connect");
/**
 * @param {{name: string, email: string, tel: number, password: string, refreshToken: string}}
 * @returns {Promise<Pick<knex.User, "user_id">[]>}
 */
const addNewUser = async ({ name, email, tel, password, refreshToken }) => {
  const reshapedTel = parseInt(String(tel).slice(-8));
  const db = await knex;
  return await db("users").insert(
    { email, name, tel: reshapedTel, password, refreshToken },
    "user_id"
  );
};

module.exports = addNewUser;