import { Schema, model, Document } from "mongoose";
import { IOrderDetails } from "./order";

export interface ICustomer extends Document {
    code: string;
    full_name: string;
    amount_paid: number;
    date: Date;
    reserved: boolean;
    bar_used: boolean;
    table: number;
    status: string;
    order: [IOrderDetails];
}

const customerSchema = new Schema({
    code: { type: String, required: true, unique:true},
    full_name: { type: String, required: true },
    amount_paid: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now()},
    reserved: { type: Boolean, required: true },
    bar_used: { type: Boolean, required: true },
    table: { type: Number, required: true },
    status: { type: String, required: true },
    order: { type: [Object], required: true },
});

export const CustomerModel = model<ICustomer>("Customer", customerSchema);

/*
example json for customer
{
    "full_name": "Juan Perez",
    "amount_paid": 100,
    "date": "2021-05-05T00:00:00.000Z",
    "reserved": false,
    "bar_used": false,
    "table": 1,
    "status": "pending",
    "order": [
            {
            "code": "1",
            "price": 10,
            is_buffet: false,
            buffet_pick: [{
                code: "1",
                price: 10,
            },
            {
                code: "2",
                price: 10,
            }
        ]
        }
    ]
}
*/
