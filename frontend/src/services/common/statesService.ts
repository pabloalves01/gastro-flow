import axios from "axios";

export async function getStates() {
  try {
    const response = await axios.get("/api/states");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar estados", error);
    throw error;
  }
}
