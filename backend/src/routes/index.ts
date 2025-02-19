import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import {
  storeCategory,
  getCategories,
  destroyCategory,
} from "../controllers/categoryController";

const router = Router();

router.get("/usuarios", obterUsuarios);
router.get("/categories", getCategories);
router.post("/categories", storeCategory);
router.delete("/categories/:id", destroyCategory);

export default router;
