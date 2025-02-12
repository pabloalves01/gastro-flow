import { Request, Response } from "express";
import pool from "../config/database";

export const obterDadosTeste = async (req: any, res: any) => {
  try {
    const dados = ["Dado 1", "Dado 2", "Dado 3"];
    res.json(dados);
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    res.status(500).json({ error: "Erro interno" });
  }
};
