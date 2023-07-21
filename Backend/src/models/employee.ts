import {Schema, model, Document} from 'mongoose';

export interface IEmployee extends Document {
    identification: string,
    name: string,
    last_name: string,
    phone_numbers: [string],
    email: string,
    address: string,
    role_code: string,
    nationality: string,
    birth_date: Date,
    picture: string
}

const employeeSchema = new Schema({
    identification: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone_numbers: {type: [String], required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    role_code: {type: String, required: true},
    nationality: {type: String, required: true},
    birth_date: {type: Date, required: true},
    picture: {type: String, required: true}
});

export const EmployeeModel = model<IEmployee>('Employee', employeeSchema);


/*
example json for employee
{
    "identification": "123456789",
    "name": "Juan",
    "last_name": "Perez",
    "phone_numbers": ["12345678", "87654321"],
    "email": "
    "address": "Calle 1",
    "code_role": "Mesero",
    "nationality": "Costarricense",
    "birth_date": "2021-05-05T00:00:00.000Z",
    "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%2Ffondo-de-pant
}
*/