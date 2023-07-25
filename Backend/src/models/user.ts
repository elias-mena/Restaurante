import {Schema, model, Document} from 'mongoose';
export interface IUser extends Document {
    code: string,
    username: string,
    password: string,
    name: string,
    last_name: string,
    phone_numbers: [string],
    email: string,
    sis_admin: boolean,
    rest_admin: boolean,
    accounts_admin: boolean,
    recovery_token: string
}

const userSchema = new Schema({
    code: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone_numbers: {type: [String], required: true},
    email: {type: String, required: true, unique: true},
    sis_admin: {type: Boolean, required: true, default: false},
    rest_admin: {type: Boolean, required: true, default: false},
    accounts_admin: {type: Boolean, required: true, default: false},
    recovery_token: {type: String, required: false, default: null}
});

export const UserModel = model<IUser>('User', userSchema);