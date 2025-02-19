import { Request, Response } from "express";
import Categories from "../models/categories";

// Criar nova categoria
export const storeCategory = async (
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

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Categories.findAll();
    res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao obter categorias:", error);
    res.status(500).json({ error: "Erro interno ao obter categorias." });
  }
};

export const destroyCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await Categories.findByPk(id);
    if (!category) {
      res.status(404).json({ error: "Categoria não encontrada." });
      return;
    }
    await category.destroy();
    res.status(200).json({ message: "Categoria excluída com sucesso!" });
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    res.status(500).json({ error: "Erro interno ao excluir categoria." });
  }
};
