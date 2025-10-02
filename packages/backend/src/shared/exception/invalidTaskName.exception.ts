export class InvalidTaskNameException extends Error {
    constructor(invalidTaskName: string) {
        super()
        this.message = `Invalid TaskName ${invalidTaskName}`
    }
}
