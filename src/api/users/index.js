import express from "express";
import {index, show, userRemove, userAdd} from "./controller.js";

const router = express.Router();

router.get("/",index);

router.get("/:id",show);

router.delete("/:id",userRemove)

router.post("/",userAdd);

export default router;