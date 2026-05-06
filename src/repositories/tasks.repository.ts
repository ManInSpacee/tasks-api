import { prisma } from "../lib/prisma";

export class TasksRepository {
  async findAll() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }

  async findById(id: string) {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    return task;
  }

  async toggleDone(id: string, done: boolean) {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        done,
      },
    });
    return task;
  }

  async create(title: string) {
    const newTask = await prisma.task.create({
      data: {
        title,
      },
    });
    return newTask;
  }

  async delete(id: string) {
    const deleted = await prisma.task.delete({
      where: {
        id,
      },
    });
    return deleted;
  }
}
