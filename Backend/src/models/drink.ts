import {Schema, model, Document} from 'mongoose';

export interface IDrink extends Document {
    code: string,
    name: string,
    ingredients: [string],
    description: string,
    price: number,
    picture: string,
}

const drinkSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    ingredients: {type: [String], required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String, required: true},
});

export const DrinkModel = model<IDrink>('Drink', drinkSchema);

/*
Example of a hot drink:
{
    "name": "Café",
    "ingredients": ["Café", "Agua"],
    "description": "Café caliente",
    "price": 1000,
    "picture": "https://cafes.jpg"
}
*/