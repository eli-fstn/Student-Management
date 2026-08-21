import express, { Router } from "express";
import { getStudent, createStudent } from "../controllers/student.controller";

const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);

export default router