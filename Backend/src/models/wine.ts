import {Schema, model, Document} from 'mongoose';

export interface IWine extends Document {
    code: string,
    name: string,
    description: string,
    brand_code: string,
    nationality: string,
    amount: number,
    bottle_price: number,
    is_bottle: boolean,
    unit_price: number,
    is_unit: boolean,
    picture: string,
    harvest_year: number,
}

const wineSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    brand_code: {type: String, required: true},
    nationality: {type: String, required: true},
    amount: {type: Number, required: true},
    bottle_price: {type: Number, required: true},
    is_bottle: {type: Boolean, required: true},
    unit_price: {type: Number, required: true},
    is_unit: {type: Boolean, required: true},
    picture: {type: String, required: true},
    harvest_year: {type: Number, required: true},
});

export const WineModel = model<IWine>('Wine', wineSchema);

/*
Wine example
{
    "code": "W-0001",
    "name": "Vino tinto",
    "description": "Vino tinto de la casa",
    "brand_code": "M-1",
    "national_code": "P-1",
    "amount": 100,
    "bottle_price": 10000,
    "is_bottle": true,
    "unit_price": 1000,
    "is_unit": true,
    "picture": "https://www.vinoseleccion.com/imagenes/productos/2019/10/156991.jpg",
    "harvest_year": 2019
}
*/