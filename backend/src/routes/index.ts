// src/routes/index.ts
import { Router } from "express";
import { obterDadosTeste } from "../controllers/transactionController";

const router = Router();

router.get("/teste", obterDadosTeste);  // Certifique-se de que esta rota está configurada

export default router;
