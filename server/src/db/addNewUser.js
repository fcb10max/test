const knex = require("./connect");
/**
 * @param {{name: string, email: string, tel: number, password: string, refreshToken: string}}
 * @returns {Promise<Pick<knex.User, "user_id">[]>}
 */
const addNewUser = async ({ name, email, tel, password, refreshToken }) => {
  const reshapedTel = parseInt(String(tel).slice(-8));
  return await knex("users").insert(
    { email, name, tel: reshapedTel, password, refreshToken },
    "user_id"
  );
};

module.exports = addNewUser;