import { Router } from "express";
import { obterDadosTeste } from "../controllers/transactionController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Página de Login");
});

router.get("/teste", obterDadosTeste);

export default router;
