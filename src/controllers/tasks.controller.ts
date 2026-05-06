import { TasksService } from "../services/tasks.service";
import { Request, Response } from "express";

type IdParam = { id: string };

export class TasksController {
  private service = new TasksService();
  getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const tasks = await this.service.getAll();
      res.status(200).json(tasks);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      const status = message === "Tasks not found" ? 404 : 500;
      res.status(status).json(message);
    }
  };
  findById = async (req: Request<IdParam>, res: Response): Promise<void> => {
    try {
      const task = await this.service.findById(req.params.id);
      res.status(200).json(task);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      const status = message === "Task not found" ? 404 : 500;
      res.status(status).json(message);
    }
  };
  toggleDone = async (req: Request<IdParam>, res: Response): Promise<void> => {
    try {
      const toggledTask = await this.service.toggleDone(req.params.id);
      res.status(200).json(toggledTask);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      const status = message === "Task not found" ? 404 : 500;
      res.status(status).json(message);
    }
  };
  create = async (
    req: Request<{}, {}, { title: string }>,
    res: Response,
  ): Promise<void> => {
    try {
      const newTask = await this.service.create(req.body.title);
      res.status(201).json(newTask);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      const status = message === "Bad request" ? 400 : 500;
      res.status(status).json(message);
    }
  };
  delete = async (req: Request<IdParam>, res: Response): Promise<void> => {
    try {
      const deleted = await this.service.delete(req.params.id);
      res.status(200).json(deleted);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      const status = message === "Task not found" ? 404 : 500;
      res.status(status).json(message);
    }
  };
}
