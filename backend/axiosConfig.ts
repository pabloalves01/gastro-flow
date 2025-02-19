import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 🔹 Agora todas as requisições começarão com "/api"
});

export default api;
