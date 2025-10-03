import { validateUuid } from "src/shared/utils/validateUuid";
import { TaskRepository } from "../../domain/repository/task.repository";
import { InvalidUuidException } from "src/shared/exception/invalidUuid.exception";
import { Task } from "../../domain/model/task";

export class FindTaskByIdUseCase {
    constructor(private readonly repository: TaskRepository) { }

    async execute(id: string): Promise<Task> {
        if (!validateUuid(id))
            throw new InvalidUuidException(id)
        return await this.repository.findById(id)
    }
}