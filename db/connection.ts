import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

const db = new Sequelize(
  process.env.DB_DATABASE || "test",
  process.env.DB_USERNAME || "test",
  process.env.DB_PASSWORD || "test",
  {
    host: process.env.DB_CONNECTION || "localhost",
    dialect: "mysql",
  }
);

export default db;
