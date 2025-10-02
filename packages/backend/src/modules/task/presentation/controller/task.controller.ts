import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskUseCase } from 'src/modules/task/application/usecase/createTask.usecase';
import { TaskRepository } from 'src/modules/task/domain/repository/task.repository';
import { GetAllTasksUseCase } from 'src/modules/task/application/usecase/getAllTasks.usecase';
import { Task } from 'src/modules/task/domain/model/task';
import { TaskDocument } from '../../infrastructure/db/schema/task.schema';
import { TaskRepositoryImpl } from '../../infrastructure/db/repository.implementation/task.repository.impl';
import { InvalidTaskNameException } from 'src/shared/exception/invalidTaskName.exception';

@Controller("/task")
export class TaskController {
    private readonly taskRepository: TaskRepository

    constructor(
        @InjectModel("Task") private taskModel: Model<TaskDocument>
    ) {
        this.taskRepository = new TaskRepositoryImpl(taskModel)
    }

    @Get("/hello")
    hello(): string {
        return "deu certo o controller"
    }

    @Get()
    async getAll(): Promise<Task[]> {
        try {
            const getAllTasksUseCase = new GetAllTasksUseCase(this.taskRepository)
            return await getAllTasksUseCase.execute()
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    @Post()
    async create(@Body() body: { taskname: string, description?: string }) {
        try {
            const createTaskUseCase = new CreateTaskUseCase(this.taskRepository)
            return await createTaskUseCase.execute(body)
        } catch (e) {
            if (e instanceof InvalidTaskNameException) throw new BadRequestException(e)
            throw e      
        }
    }
}
