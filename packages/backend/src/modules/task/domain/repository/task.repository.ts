import { Task } from "src/modules/task/domain/model/task";

export interface TaskRepository {
    create(task: Task): Promise<Task>
    deleteById(id: string): Promise<void>
    getAll(): Promise<Task[]>
    update(id: string, updatedTask: Partial<Task>): Promise<Task>
}