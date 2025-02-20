import { useState } from "react";
import { getCepData } from "../../services/api/cepService";

export function useCep() {
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = async (NewCep: string) => {
    setCep(NewCep);

    if (NewCep.length === 8) {
      setLoading(true);
      setError(null);

      try {
        const cepData = await getCepData(NewCep);
        setCity(cepData.city);
        setState(cepData.state);
      } catch (error) {
        setError("CEP não encontrado");
      } finally {
        setLoading(false);
      }
    }
  };
  return {
    cep,
    city,
    state,
    loading,
    error,
    handleCepChange,
  };
}
