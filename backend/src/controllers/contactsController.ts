import { Request, Response } from "express";
import Contacts from "../models/contacts";

export const storeContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const formData = req.body;
    const contact = await Contacts.create(formData);
    res.status(201).json({ message: "Contato criado com sucesso!", contact });
  } catch (error) {
    console.error("Erro ao criar contato:", error);
    res.status(500).json({ error: "Erro interno ao criar contato." });
  }
};
