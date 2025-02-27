import { Router } from "express";
import { obterUsuarios } from "../controllers/userController";
import { getStates } from "../controllers/common/stateController";
import {
  getContacts,
  storeContacts,
  disableOrEnableContact,
} from "../controllers/contactsController";
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
router.put("/contacts/:id/disable", disableOrEnableContact);

export default router;
