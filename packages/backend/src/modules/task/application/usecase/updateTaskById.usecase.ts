import { validateUuid } from "src/shared/utils/validateUuid";
import { TaskRepository } from "../../domain/repository/task.repository";
import { InvalidUuidException } from "src/shared/exception/invalidUuid.exception";
import { Task } from "../../domain/model/task";

export class UpdateTaskByIdUseCase {
    constructor(private readonly repository: TaskRepository) { }

    async execute(id: string, task: Partial<Task>): Promise<Task> {
        if (!validateUuid(id))
            throw new InvalidUuidException(id)
        return await this.repository.update(id, task)
    }
}