import {Schema, model, Document} from 'mongoose';
import {IBuffet} from './buffet'
import {ISpeciality} from './speciality'
import {IDrink} from './drink'
import {IGasDrink} from './gas_drink'
import {ILiquor} from './liquor'
import {IWine} from './wine'

export interface IMenu extends Document {
    buffet: [IBuffet],
    specialities: [ISpeciality],
    drinks: [IDrink],
    gas_drinks: [IGasDrink],
    liquors: [ILiquor],
    wines: [IWine],
}

const menuSchema = new Schema({
    buffet: {type: [Object], required: true},
    specialities: {type: [Object], required: true},
    drinks: {type: [Object], required: true},
    gas_drinks: {type: [Object], required: true},
    liquors: {type: [Object], required: true},
    wines: {type: [Object], required: true},
});

export const MenuModel = model<IMenu>('Menu', menuSchema);

