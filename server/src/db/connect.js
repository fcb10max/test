const { Knex } = require("knex");
require("dotenv").config();

const DATABASE_TABLE_NAME = "users"; // !!! change this value if needed

/**
 * @typedef {{
 *  user_id: number,
 *  name: string,
 *  email: string,
 *  tel:number,
 *  password: string,
 *  refreshToken:string,
 * }} User
 */
let User;

const connectDB = async () => {
  /**
  @type {Knex<User, Partial<User>[]>}
  */

  const db = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
    },
  });

  const validDB = await db.schema.hasTable("users").then(async (bool) => {
    if (!bool) {
      await db.schema.createTable(DATABASE_TABLE_NAME, (table) => {
        table.increments("user_id", { primaryKey: true });
        table.string("name", 20).notNullable();
        table.string("email", 32).notNullable().unique();
        table.integer("tel", 8).notNullable().unique();
        table.string("password", 64).notNullable();
        table.string("refreshToken", 256).notNullable().unique();
      });
    }
    return db;
  });
  return validDB;
};

module.exports = connectDB();
