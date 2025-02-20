import { Request, Response } from "express";
import States from "../../models/states";

export const getStates = async (req: Request, res: Response): Promise<void> => {
  try {
    const state = await States.findAll();
    res.status(200).json(state);
  } catch (error) {
    console.error("Erro ao obter estados:", error);
    res.status(500).json({ error: "Erro interno ao obter estados." });
  }
};
