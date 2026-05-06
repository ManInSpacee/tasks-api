import { TasksRepository } from "../repositories/tasks.repository";

export class TasksService {
  private repository = new TasksRepository();
  async getAll() {
    const tasks = await this.repository.findAll();
    return tasks;
  }
  async findById(id: string) {
    const task = await this.repository.findById(id);
    if (!task) throw new Error("Task not found");
    return task;
  }
  async toggleDone(id: string) {
    const task = await this.repository.findById(id);
    if (!task) throw new Error("Task not found");
    const toggledTask = await this.repository.toggleDone(id, !task.done);
    return toggledTask;
  }
  async create(title: string) {
    if (!title) throw new Error("Bad request");
    const newTask = await this.repository.create(title);
    return newTask;
  }
  async delete(id: string) {
    await this.findById(id);
    await this.repository.delete(id);
    return true;
  }
}
