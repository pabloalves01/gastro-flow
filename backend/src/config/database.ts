import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Criando a instância do Sequelize para conectar com o banco de dados
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "dev",
  password: process.env.DB_PASSWORD || "secret",
  database: process.env.DB_NAME || "meu_banco",
});

export default sequelize;
