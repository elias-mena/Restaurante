import {Schema, model, Document} from 'mongoose';

export interface ISupplier extends Document {
    code: string,
    identification: string,
    first_purchase: Date,
    name: string,
    last_name: string,
    phone_numbers: [string],
    email: string,
    address: string,
    picture: string
}

const supplierSchema = new Schema({
    code: {type: String, required: true, unique: true},
    identification: {type: String, required: true, unique: true},
    first_purchase: {type: Date, required: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone_numbers: {type: [String], required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    picture: {type: String, required: true}
});

export const SupplierModel = model<ISupplier>('Supplier', supplierSchema);

/*
Example
{
    "identification": "123456789",
    "first_purchase": "2020-01-01",
    "name": "Juan",
    "last_name": "Perez",
    "phone_numbers": ["12345678", "87654321"],
    "email": "email@.com",
    "address": "Calle 1, #1-1",
    "picture": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%2Ffondo
}
*/
