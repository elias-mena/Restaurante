import {Schema, model, Document} from 'mongoose';

export interface IBrand extends Document {
    code: string,
    name: string,
    description: string,
    nationality: string,
    picture: string,
    company:{
        legal_id: string,
        name: string,
        details: string,
        address: string,
        phone: string,
        email: string,
        picture: string,
    }
    }

const brandSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    nationality: {type: String, required: true},
    picture: {type: String, required: true},
    company:{
        legal_id: {type: String, required: true},
        name: {type: String, required: true},
        details: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        email: {type: String, required: true},
        picture: {type: String, required: true},
    }
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