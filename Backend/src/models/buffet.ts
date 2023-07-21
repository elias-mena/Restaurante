import {Schema, model, Document} from 'mongoose';

export interface IBuffet extends Document {
    code: string,
    name: string,
    description: string,
    price: number,
    type: string,
    measure_unit_code: string,
}

const buffetSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    type: {type: String, required: true},
    measure_unit_code: {type: String, required: true},
});

export const BuffetModel = model<IBuffet>('Buffet', buffetSchema);


/*
Example:
{
    "code": "1",
    "name": "Arroz con pollo",
    "description": "Arroz con pollo y papas fritas y ensalada de verduras mixtas",
    "price": 100,
    "type": "Buffet",
    "measure_unit_code": "kg"
}

*/