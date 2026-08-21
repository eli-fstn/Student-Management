import * as studentService from "../services/student.services";
import express, {Request, Response} from "express";

export const getStudent = async (req: Request, res: Response) => {
  try {
    const response = await studentService.getStudent();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await studentService.createStudent(
      req.body.full_name,
      req.body.email,
      req.body.program,
      req.body.year_level
    );
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}