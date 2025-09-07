import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import sequelize from "../config/database"; // Importa a conexão com o banco

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 5001;

// Sincronizar o banco de dados antes de iniciar o servidor
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Banco de dados sincronizado com sucesso");

//     app.listen(PORT, () => {
//       console.log(`Servidor rodando na porta ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Erro ao sincronizar o banco de dados:", error);
//   });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
