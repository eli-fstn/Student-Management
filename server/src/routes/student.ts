import express, { Router } from "express";
import { getStudent } from "../controllers/student.controller";

const router = express.Router();

router.get('/masterlist', getStudent);

export default router