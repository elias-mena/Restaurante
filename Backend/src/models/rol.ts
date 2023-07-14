import {Schema, model, Document} from 'mongoose';

export interface IRol extends Document {
    code: string,
    name: string,
    description: string,
}

const rolSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
});

export const RolModel = model<IRol>('Rol', rolSchema);

/* 
ejemplo json rol = {
    "code": "ADMIN",
    "name": "Administrador",
    "description": "Administrador del sistema"
}
*/