import { Request, Response } from "express";
import Categories from "../models/categories";

// Criar nova categoria
export const newCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, color } = req.body;

    if (!name) {
      res.status(400).json({ error: "O nome da categoria é obrigatório." });
      return;
    }

    const category = await Categories.create({ name, description, color });

    res
      .status(201)
      .json({ message: "Categoria criada com sucesso!", category });
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    res.status(500).json({ error: "Erro interno ao criar categoria." });
  }
};
