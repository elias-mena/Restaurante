import {Schema, model, Document} from 'mongoose';

export interface IEdible extends Document {
    code: string,
    name: string,
    amount: number,
    brand_code: string,
    description: string,
    edible_type: string,
    class:string,
    line:string,
    measure_unit: string,
}

const edibleSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    brand_code: {type: String, required: true},
    description: {type: String, required: true},
    edible_type: {type: String, required: true},
    class: {type: String, required: true},
    line: {type: String, required: true},
    measure_unit: {type: String, required: true},
});

export const EdibleModel = model<IEdible>('Edible', edibleSchema);

/*
Example Squema JSON
{
    "name": "Tapitas",
    "amount": 100,
    "brand_code": "M-5",
    "description": "Chocolates tapitas",
    "edible_type": "Chocolates",
    "class": "1",
    "line": "1",
    "measure_unit": "M-2"
}
*/