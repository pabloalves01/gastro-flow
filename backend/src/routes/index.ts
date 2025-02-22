import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { getStates } from "../controllers/common/stateController";
import { getContacts, storeContacts } from "../controllers/contactsController";
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

router.get("/contacts", getContacts);
router.post("/contacts", storeContacts);

export default router;
