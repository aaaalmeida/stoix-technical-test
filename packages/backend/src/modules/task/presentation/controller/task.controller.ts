import { BadRequestException, Body, Controller, Delete, Get, Logger, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskUseCase } from 'src/modules/task/application/usecase/createTask.usecase';
import { TaskRepository } from 'src/modules/task/domain/repository/task.repository';
import { GetAllTasksUseCase } from 'src/modules/task/application/usecase/getAllTasks.usecase';
import { Task } from 'src/modules/task/domain/model/task';
import { TaskDocument } from '../../infrastructure/db/schema/task.schema';
import { TaskRepositoryImpl } from '../../infrastructure/db/repository.implementation/task.repository.impl';
import { InvalidTaskNameException } from 'src/shared/exception/invalidTaskName.exception';
import { DeleteTaskByIdUseCase } from '../../application/usecase/deleteTaskById.usecase';
import { InvalidUuidException } from 'src/shared/exception/invalidUuid.exception';
import { FindTaskByIdUseCase } from '../../application/usecase/findTaskById.usecase';

@Controller("/task")
export class TaskController {
    private readonly taskRepository: TaskRepository
    private readonly logger = new Logger(TaskController.name)

    constructor(
        @InjectModel("Task") private taskModel: Model<TaskDocument>
    ) {
        this.taskRepository = new TaskRepositoryImpl(taskModel)
    }

    @Get()
    async findAll(): Promise<Task[]> {
        try {
            const getAllTasksUseCase = new GetAllTasksUseCase(this.taskRepository)
            const response = await getAllTasksUseCase.execute()
            return response 
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    @Get(":id")
    async findById(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string): Promise<Task> {
        try {
            const findTaskByIdUseCase = new FindTaskByIdUseCase(this.taskRepository)
            return findTaskByIdUseCase.execute(id)
        } catch (e) {
            if (e instanceof InvalidUuidException) throw new BadRequestException(e)
            throw e
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

    @Delete(":id")
    async deleteById(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
        try {
            const deleteTaskByIdUseCase = new DeleteTaskByIdUseCase(this.taskRepository)
            return await deleteTaskByIdUseCase.execute(id)
        } catch (e) {
            if (e instanceof InvalidUuidException) throw new BadRequestException(e)
            throw e
        }
    }
}
