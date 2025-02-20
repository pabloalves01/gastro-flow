import axios from "axios";

export async function getCepData(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      throw new Error("CEP não encontrado");
    }

    return {
      city: response.data.localidade, // Município
      state: response.data.uf, // Estado (sigla)
    };
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    throw error;
  }
}
