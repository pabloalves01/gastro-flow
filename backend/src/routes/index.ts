import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { getStates } from "../controllers/common/stateController";
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

router.get("/states", getStates);

export default router;
