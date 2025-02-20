import { useEffect, useState } from "react";
import { getStates } from "../../services/common/statesService";

interface Estado {
  id: number;
  name: string;
  initials: string;
}

export function useStates() {
  const [states, setStates] = useState<Estado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEstados() {
      try {
        const data = await getStates();
        setStates(data);
      } catch (error) {
        setError("Erro ao carregar estados");
      } finally {
        setLoading(false);
      }
    }

    fetchEstados();
  }, []);

  return { states, loading, error };
}
