import express from "express";
import tasksRouter from "./routes/tasks.route";

const app = express();
app.use(express.json());

app.use("/tasks", tasksRouter);

export default app;
