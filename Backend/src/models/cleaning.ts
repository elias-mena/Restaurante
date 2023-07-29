import {Schema, model, Document} from 'mongoose';

export interface ICleaning extends Document {
    code: string,
    name: string,
    brand_code: string,
    description: string,
    amount: number,
    type: string,
    measure_unit: string,
    is_liquid: boolean,
}

const cleaningSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    brand_code: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    type: {type: String, required: true},
    measure_unit: {type: String, required: true},
    is_liquid: {type: Boolean, required: true},
});

export const CleaningModel = model<ICleaning>('Cleaning', cleaningSchema);

/*
Example
{
    "name": "Lavaplatos",
    "description": "Lavaplatos",
    "brand_code": "M-1",
    "amount": 3,
    "type": "Cleaning",
    "measure_unit": "M-2",
    "is_liquid": true
}
*/