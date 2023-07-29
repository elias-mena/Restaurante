import {Schema, model, Document} from 'mongoose';

export interface IBar extends Document {
    descrition: string,
    status: string,
}

const barSchema = new Schema({
    descrition: {type: String, required: true},
    status: {type: String, required: true},
});

export const BarModel = model<IBar>('Bar', barSchema);

/*
example
{
    "descrition": "Barra 1",
    "status": "Activo",
}
*/