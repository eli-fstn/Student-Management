import express, {Request, Response} from "express";
import studentRoutes from "./routes/student.route";
import pool from "./config/db";

const app = express();

app.use(express.json());

app.use('/student', studentRoutes)

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error(error);

    res.status(500).json({
        status: "error",
        database: "disconnected"
    });
  }
});

export default app