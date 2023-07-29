import {Schema, model, Document} from 'mongoose';

export interface IMeasureUnit extends Document {
    code: string,
    unit: string,
    scale: string,
    description: string,
    simbol: string,
    simbology: string,
}

const measureUnitSchema = new Schema({
    code: {type: String, required: true, unique: true},
    unit: {type: String, required: true},
    scale: {type: String, required: true},
    description: {type: String, required: true},
    simbol: {type: String, required: true},
    simbology: {type: String, required: true},
});

export const MeasureUnitModel = model<IMeasureUnit>('MeasureUnit', measureUnitSchema);

/*
EXAMPLE:
{
    "code": "Kg",
    "unit": "Kilogramo",
    "scale": "Masa",
    "description": "Kilogramo",
    "simbol": "Kg",
    "simbology": "Kilogramo"
}

*/