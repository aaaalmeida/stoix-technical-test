import { Task } from "src/modules/task/domain/model/task";
import { TaskRepository } from "../../domain/repository/task.repository";

export class GetAllTasksUseCase {
    constructor(private repository: TaskRepository) { }

    async execute(): Promise<Task[]> {
        return await this.repository.getAll()
    }
}