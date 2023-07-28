import {Schema, model, Document} from 'mongoose';

export interface IGasDrink extends Document {
    code: string,
    name: string,
    price: number,
    description: string,
    picture: string,
    brand_code: string,
    nationality: string,
    amount: number,
}

const gasDrinkSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    picture: {type: String, required: true},
    brand_code: {type: String, required: true},
    nationality: {type: String, required: true},
    amount: {type: Number, required: true},
});

export const GasDrinkModel = model<IGasDrink>('GasDrink', gasDrinkSchema);

/*
Example
{
    "name":"Coca Cola",
    "price": 2000,
    "description": "Bebida gaseosa",
    "picture": "https://www.coca-cola.co.cr/content/dam/GO/CokeZone/CostaRica/2019/01/01-01-2019-1.jpg",
    "brand_code": "M-1",
    nationality: "Costa Rica",
    "amount": 100
}
*/