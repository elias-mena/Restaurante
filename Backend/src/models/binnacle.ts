import {Schema, model, Document} from 'mongoose';

export interface IBinnacle extends Document {
    code: string,
    user: string,
    date: Date,
    description: string,
    detail: string,
}

const binnacleSchema = new Schema({
    code: {type: String, required: true, unique: true},
    user: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now()},
    description: {type: String, required: true},
    detail: {type: String, required: true},
});

export const BinnacleModel = model<IBinnacle>('Binnacle', binnacleSchema);

/*
Example
{
    "user": "U-1",
    "description": "Bitacora dia 1",
    "detail": "Se realizo el inventario de los productos"
}
 */