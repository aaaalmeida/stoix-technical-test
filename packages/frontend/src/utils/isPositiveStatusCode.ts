export const isPositiveStatusCode = (statusCode: number): boolean =>
    [200, 201, 202, 203, 204, 205, 206].includes(statusCode)