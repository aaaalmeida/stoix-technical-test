import { Task } from "src/modules/task/domain/model/task";
import { TaskDocument } from "../schema/task.schema";

export class TaskMapper {
    static toPersistence(task: Task) {
        return task.toPersistence()
    }

    static toDomain(doc: Partial<TaskDocument>): Task {
        const id = doc._id?.toString ? doc._id.toString() : String(doc._id)

        return Task.fromPersistence({
            id,
            taskname: doc.taskname!,
            completed: Boolean(doc.completed),
            description: doc.description,
        })
    }
}