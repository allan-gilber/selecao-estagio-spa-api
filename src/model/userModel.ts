export interface userModel {
    id?: number,
    name: string,
    email: string,
    birthday: Date,
    phoneNumber: string
}

export interface userModelDatabase {
    user_id?: number,
    user_name: string,
    user_email: string,
    user_birthday: Date,
    user_phone_number: string,
}