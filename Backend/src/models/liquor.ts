import {Schema, model, Document} from 'mongoose';

export interface ILiquor extends Document {
    code: string,
    name: string,
    brand_code: string,
    nationality: string,
    amount: number,
    bottle_price: number,
    is_bottle: boolean,
    unit_price: number,
    is_unit: boolean,
    description: string,
    picture: string,
}

const liquorSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    brand_code: {type: String, required: true},
    nationality: {type: String, required: true},
    amount: {type: Number, required: true},
    bottle_price: {type: Number, required: true},
    is_bottle: {type: Boolean, required: true},
    unit_price: {type: Number, required: true},
    is_unit: {type: Boolean, required: true},
    description: {type: String, required: true},
    picture: {type: String, required: true},
});

export const LiquorModel = model<ILiquor>('Liquor', liquorSchema);

/*\
Liquor example
{
    "name": "Jack Daniels Old No. 7",
    "brand_code": "M-3",
    "nationality": "P-1",
    "amount": 100,
    "bottle_price": 10000,
    "is_bottle": true,
    "unit_price": 1000,
    "is_unit": true,
    "description": "Tennessee Whisky",
    "picture": "https://th.bing.com/th/id/OIP.HYquAx78hhPryCYiOayq5QHaTw?pid=ImgDet&rs=1"
}
*/