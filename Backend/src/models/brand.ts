import {Schema, model, Document} from 'mongoose';

export interface IBrand extends Document {
    code: string,
    name: string,
    description: string,
    nationality: string,
    }

const brandSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    nationality: {type: String, required: true},
});

export const BrandModel = model<IBrand>('Brand', brandSchema);

/*
Example of a brand:
{
    "code": "001",
    "name": "Coca Cola",
    "description": "Empresa de bebidas",
    "nationality": "Colombia",
    "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
    "company":{
        "legal_id": "123456789",
        "name": "Coca Cola",
        "details": "Empresa de bebidas",
        "address": "Calle 123",
        "phone": "123456789",
        "email": "
        "picture": "https://www.cocacola.co/Content/img/content/Freestyle-Home-Page-Image.jpg",
    }
}

*/