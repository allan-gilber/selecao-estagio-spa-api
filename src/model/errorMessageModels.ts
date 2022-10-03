export interface errorMessage {
    status: number
    message: string
}

export interface errorMessageObject {
    [key: string]: errorMessage
}