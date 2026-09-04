import express, { Router } from "express";
import { getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/student.controller";

const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.patch('/:id', deleteStudent);

export default router