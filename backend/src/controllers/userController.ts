import { Request, Response } from "express";
import User from "../models/user";  // Certifique-se de que o caminho para o modelo está correto

export const obterUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.findAll(); // Verifica se a tabela existe no banco
    res.json(usuarios);  // Retorna os usuários em formato JSON
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ error: "Erro interno" });
  }
};
