// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// const sequelize = new Sequelize({
//   dialect: "postgres",
//   host: process.env.DB_HOST || "localhost",
//   username: process.env.DB_USER || "dev",
//   password: process.env.DB_PASSWORD || "secret",
//   database: process.env.DB_NAME || "meu_banco",
// });

// // Testa a conexão
// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexão com o banco de dados bem-sucedida!");
//   } catch (error) {
//     console.error("Erro de conexão:", error);
//   }
// };

// testConnection();

// export default sequelize;

// Este arquivo é utilizado para configurar o Sequelize e carregar
// automaticamente todos os modelos (models) dentro da pasta models.
// Ele ajuda a estabelecer a conexão e associar os modelos ao banco de dados de forma dinâmica.

import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const db: { [key: string]: any } = {};
const basename = path.basename(__filename);

// Carrega os modelos automaticamente
fs.readdirSync(path.join(__dirname))
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Associa os modelos, se necessário
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
