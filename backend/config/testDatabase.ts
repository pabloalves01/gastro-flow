import sequelize from "./database";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados com sucesso! 🚀");
  } catch (error) {
    console.error("Erro ao conectar no banco de dados:", error);
  } finally {
    await sequelize.close();
  }
})();
