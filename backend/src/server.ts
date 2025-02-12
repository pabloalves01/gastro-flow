import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import pool from "./config/database";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

// Teste de conexão com o banco de dados logo após configurar o servidor
pool
  .connect()
  .then((client) => {
    console.log("Conexão com o banco de dados bem-sucedida!");
    client.release(); // Libera o cliente após testar a conexão
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
