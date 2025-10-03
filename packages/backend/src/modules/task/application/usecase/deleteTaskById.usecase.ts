import { validateUuid } from "src/shared/utils/validateUuid";
import { TaskRepository } from "../../domain/repository/task.repository";
import { InvalidUuidException } from "src/shared/exception/invalidUuid.exception";
import { Logger } from "@nestjs/common";

export class DeleteTaskByIdUseCase {
    constructor(private readonly repository: TaskRepository) { }
    logger = new Logger(DeleteTaskByIdUseCase.name)

    async execute(id: string): Promise<void> {
        this.logger.debug(id)
        if (!validateUuid(id))
            throw new InvalidUuidException(id)
        return await this.repository.deleteById(id)
    }
}