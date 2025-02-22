import { Request, Response } from "express";
import Contacts from "../models/contacts";
import States from "../models/states";
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

export const getContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await Contacts.findAll({
      include: [
        {
          model: States,
          as: "state",
          attributes: ["id", "name", "initials"],
        },
      ],
    });

    contacts.forEach((contact) => {
      if (contact.contact_type === "customer") {
        (contact as any).contact_type = "Cliente";
      } else if (contact.contact_type === "supplier") {
        (contact as any).contact_type = "Fornecedor";
      }
    });

    res.status(200).json(contacts);
  } catch (error) {
    console.error("Erro ao obter contatos:", error);
    res.status(500).json({ error: "Erro interno ao obter contatos." });
  }
};
