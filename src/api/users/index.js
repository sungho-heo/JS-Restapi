import express from "express";
import { index, show, destroy, create, update } from "./controller.js"

const router = express.Router();

router.get("/",index);

router.get("/:id",show);

router.delete("/:id", destroy)

router.post("/", create);

router.put("/:id", update);

export default router;