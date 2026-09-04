import pool from "../config/db";
import fs from "fs";
import path from "path";

const loadSql = (file: any) => {
  return fs.readFileSync(
    path.join(process.cwd(), "database/student", file),
    "utf8"
  );
};

export const getStudent = async () => {
  const get_all_student = loadSql('get_student.sql');

  const response =  await pool.query(get_all_student);

  return response.rows;
}

export const createStudent = async (full_name: String, email: String, program: String, year_level: number) => {
  const create_student = loadSql('create_student.sql');

  const response = await pool.query(create_student, [full_name, email, program, year_level]);

  return response.rows[0];
}

export const updateStudent = async (full_name: String, email: String, program: String, year_level: number, id: number) => {
  const update_student = loadSql('update_student.sql');

  const response = await pool.query(update_student, [full_name, email, program, year_level, id]);
  
  return response.rows[0];
}

export const deleteStudent = async (id: number) => {
  const delete_student = loadSql('delete_student.sql');

  await pool.query(delete_student, [id]);
}