import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  value: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Estado para armazenar erros

  useEffect(() => {
    // Função para buscar os usuários
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/usuarios"); // URL para a rota que retorna os usuários
        setUsers(response.data); // Atualiza o estado com os dados recebidos
      } catch (err) {
        setError("Erro ao buscar usuários"); // Se houver erro, atualiza o estado de erro
      } finally {
        setLoading(false); // Quando terminar a requisição, define o carregamento como falso
      }
    };

    fetchUsers(); // Chama a função para buscar os usuários
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <Link to="/login">Login</Link>
      {loading && <p>Carregando...</p>}{" "}
      {/* Exibe "Carregando..." enquanto os dados não chegam */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Exibe um erro caso haja um problema na requisição */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Nome: {user.name}</p>
            <p>Valor: {user.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
