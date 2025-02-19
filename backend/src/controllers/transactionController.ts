// src/controllers/transactionController.ts
import { Request, Response } from 'express';
import Transaction from '../models/transaction'; // Importe o modelo correto

export const obterDadosTeste = async (req: Request, res: Response) => {
  try {
    // Buscar todas as transações do banco
    const transactions = await Transaction.findAll();

    // Enviar os dados encontrados como resposta
    res.json(transactions); 
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    res.status(500).json({ error: "Erro interno" });
  }
};
