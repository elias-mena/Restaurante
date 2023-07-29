import {Schema, model, Document} from 'mongoose';
import { IUser } from './user';
import { IEmployee } from './employee';
import { ICustomer } from './customer';
import { ICashier } from './cashier'
import { ITable } from './table'
import { IBar } from './bar'
import { IInventory } from './inventory'
import { ICleaning } from './cleaning'
import { IEdible } from './edible'
import { IMenu } from './menu'


export interface IRestaurant extends Document {
    name: string,
    address: string,
    phone_numbers: [string],
    active: boolean,
    admins: [IUser],
    cashiers: [ICashier],
    tables: [ITable],
    bars: [IBar],
    employees: [IEmployee],
    customers: [ICustomer],
    menu: [IMenu],
    inventory: [IInventory],
    cleaning: [ICleaning],
    edibles: [IEdible],
}

const restaurantSchema = new Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    phone_numbers: {type: [String], required: true},
    active: {type: Boolean, required: true, default: true},
    admins: {type: [Object], required: true},
    cashiers: {type: [Object], required: true},
    tables: {type: [Object], required: true},
    bars: {type: [Object], required: true},
    employees: {type: [Object], required: true},
    customers: {type: [Object], required: true},
    menu: {type: [Object], required: true},
    inventory: {type: [Object], required: true},
    cleaning: {type: [Object], required: true},
    edibles: {type: [Object], required: true},
});

export const RestaurantModel = model<IRestaurant>('Restaurant', restaurantSchema);
