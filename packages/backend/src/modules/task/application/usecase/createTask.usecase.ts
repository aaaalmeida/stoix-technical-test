import { Task } from "src/modules/task/domain/model/task";
import { TaskRepository } from "../../domain/repository/task.repository";

export class CreateTaskUseCase {
    constructor(private readonly repository: TaskRepository) { }

    async execute(body: { taskname: string, description?: string }): Promise<Task> {
        const newTask = Task.create(body.taskname, body.description)
        return await this.repository.create(newTask)
    }
}