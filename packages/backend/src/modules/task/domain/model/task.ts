import { InvalidTaskNameException } from "src/shared/exception/invalidTaskName.exception";

export class Task {
    private constructor(
        public readonly id: string, // uuid v4
        public taskname: string,
        public completed: boolean,
        public description?: string,
    ) { }

    static create(taskname: string, description?: string): Task {
        if (taskname.length < 3 || taskname.length > 50) throw new InvalidTaskNameException(taskname)
        return new Task(
            crypto.randomUUID(),
            taskname,
            false,
            description
        )
    }

    static fromPersistence(props: {
        id: string
        taskname: string
        completed: boolean
        description?: string
    }): Task {
        return new Task(props.id, props.taskname, props.completed, props.description)
    }

    toPersistence(): { _id: string; taskname: string; completed: boolean; description?: string } {
        return {
            _id: this.id,
            taskname: this.taskname,
            completed: this.completed,
            description: this.description,
        }
    }
}