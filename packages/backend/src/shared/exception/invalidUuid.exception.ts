export class InvalidUuidException extends Error {
    constructor(invalidUuid: string) {
        super()
        this.message = `Invalid uuid ${invalidUuid}`
    }
}
