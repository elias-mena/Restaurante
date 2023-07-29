import {Schema, model, Document} from 'mongoose';

export interface ICashier extends Document {
    register_date: Date,
    description: string,
    entry_money: number,
    is_open: boolean,
    is_close: boolean,
}

const cashierSchema = new Schema({
    register_date: {type: Date, required: false, default: Date.now()},
    description: {type: String, required: true},
    entry_money: {type: Number, required: true},
    is_open: {type: Boolean, required: true},
    is_close: {type: Boolean, required: true},
});

export const CashierModel = model<ICashier>('Cashier', cashierSchema);

/*
Example cashier
{
    "register_date": "2020-01-01",
    "description": "Caja 1",
    "entry_money": 1000,
    "is_open": true,
    "is_close": false,
}
*/