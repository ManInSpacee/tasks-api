import { TasksController } from "./../controllers/tasks.controller";
import { Router } from "express";

const tasksRouter = Router();
const controller = new TasksController();

tasksRouter.get("/", controller.getAll);
tasksRouter.get("/:id", controller.findById);
tasksRouter.patch("/:id/toggle/", controller.toggleDone);
tasksRouter.post("/", controller.create);
tasksRouter.delete("/:id", controller.delete);

export default tasksRouter;
