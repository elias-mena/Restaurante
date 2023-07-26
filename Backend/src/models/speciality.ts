import {Schema, model, Document} from 'mongoose';

export interface ISpeciality extends Document {
    code: string,
    name: string,
    ingredients: [string],
    description: string,
    price: number,
    picture: string,
}

const specialitySchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    ingredients: {type: [String], required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String, required: true},
});

export const SpecialityModel = model<ISpeciality>('Speciality', specialitySchema);

/*
Example Speciality
{
    code: "1",
    name: "Pasta",
    ingredients: ["Pasta", "Salsa", "Queso"],
    description: "Pasta con salsa de queso",
    price: 100,
    picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinavital.mx%2Frecetas%2Fpasta-con-salsa-de-queso%2F2020%2F02%2F&psig=AOvVaw0QZ3Z3Q4Z2Q4Q4Z2Q4Z2Q4&ust=1623687223452000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjQ4Z2Q4Z2QCFQAAAAAdAAAAABAD"
}
*/