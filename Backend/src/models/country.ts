import {Schema, model, Document} from 'mongoose';

export interface ICountry extends Document {
    code: string,
    name: string,
    flag_picture: string,
}

const countrySchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    flag_picture: {type: String, required: true},
});

export const CountryModel = model<ICountry>('Country', countrySchema);
