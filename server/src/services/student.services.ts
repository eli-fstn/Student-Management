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