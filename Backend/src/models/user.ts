import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
    username: string,
    name: string,
    last_name: string,
    phone_numbers: [string],
    sis_admin: boolean,
    rest_admin: boolean,
    accounts_admin: boolean,
}

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone_numbers: {type: [String], required: true},
    sis_admin: {type: Boolean, required: true, default: false},
    rest_admin: {type: Boolean, required: true, default: false},
    accounts_admin: {type: Boolean, required: true, default: false},
});

export const UserModel = model<IUser>('User', userSchema);