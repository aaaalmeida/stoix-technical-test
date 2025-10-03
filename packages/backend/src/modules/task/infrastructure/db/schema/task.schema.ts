import { Schema, Document } from "mongoose";

export interface TaskDocument extends Document {
    _id: Schema.Types.UUID,
    taskname: string,
    completed: boolean,
    description?: string
}

export const TaskSchema = new Schema<TaskDocument>({
    _id: { type: Schema.Types.UUID, required: true },
    taskname: { type: String, required: true, minlength: 3, maxlength: 50, index: true },
    completed: { type: Boolean, required: true, default: false },
    description: { type: String, required: false, maxlength: 500 }
})