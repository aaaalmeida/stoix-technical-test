import { Model } from "mongoose";
import { TaskRepository } from "src/modules/task/domain/repository/task.repository";
import { Task } from "src/modules/task/domain/model/task";
import { TaskDocument } from "../schema/task.schema";
import { InjectModel } from "@nestjs/mongoose";
import { TaskMapper } from "../mapper/task.mapper";
import { Logger, NotFoundException } from "@nestjs/common";

export class TaskRepositoryImpl implements TaskRepository {
    private readonly logger: Logger = new Logger(TaskRepositoryImpl.name)

    constructor(@InjectModel("Task") private readonly taskModel: Model<TaskDocument>) { }

    async findById(id: string): Promise<Task> {
        const persistence = await this.taskModel.findById(id)
        if (!persistence) throw new NotFoundException()
        return TaskMapper.toDomain(persistence)
    }

    async create(task: Task): Promise<Task> {
        const persistence = TaskMapper.toPersistence(task)
        const created = await this.taskModel.create(persistence)
        return TaskMapper.toDomain(created)
    }

    async getAll(): Promise<Task[]> {
        const response = await this.taskModel.find().lean().exec()
        return response.map(r => TaskMapper.toDomain(r))
    }

    async deleteById(id: string): Promise<void> {
        await this.taskModel.deleteOne({ _id: id }).exec()
    }

    async update(id: string, updatedTask: Partial<Task>): Promise<Task> {
        // retorna novo obj
        const updated = await this.taskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec()

        if (!updated) throw new Error("Task not found")
        return TaskMapper.toDomain(updated)
    }
}