const knex = require("./connect");

/**
 * @param {keyof knex.User} idCol
 * @param {string | number} idColVal
 * @param {keyof knex.User} changeColId
 * @param {string} changeColNewValue
 */
const changeRow = async (idCol, idColVal, changeColId, changeColNewValue) => {
  return await knex("users")
    .where(idCol, idColVal)
    .update({ [changeColId]: changeColNewValue });
};

module.exports = changeRow;
