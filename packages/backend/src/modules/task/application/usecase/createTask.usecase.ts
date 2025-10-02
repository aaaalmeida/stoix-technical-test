import { Task } from "src/modules/task/domain/model/task";
import { TaskRepository } from "../../domain/repository/task.repository";
import { Logger } from "@nestjs/common";

export class CreateTaskUseCase {
    private readonly logger: Logger = new Logger(CreateTaskUseCase.name)
    constructor(private readonly repository: TaskRepository) { }

    async execute(body: { taskname: string, description?: string }): Promise<Task> {
        this.logger.log(body)
        const newTask = Task.create(body.taskname, body.description)
        this.logger.log(newTask)
        return await this.repository.create(newTask)
    }
}