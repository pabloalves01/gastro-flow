import { Request, Response } from "express";
import User from "../models/user";

export const obterUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ error: "Erro interno" });
  }
};
