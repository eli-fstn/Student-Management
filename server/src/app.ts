import express, {Request, Response} from "express";
import studentRoutes from "./routes/student.route";
import pool from "./config/db";

const app = express();

app.use(express.json());

app.use('/student', studentRoutes)

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

export default app