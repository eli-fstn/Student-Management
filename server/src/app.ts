import express from "express";
import morgan from "morgan";

import studentRoutes from "./routes/student.route.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/student", studentRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

export default app;