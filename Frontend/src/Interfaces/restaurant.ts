import { IUser } from './user';
import { IEmployee } from './employee';
import { ICustomer } from './Customer';
import { ICashier } from './cashier'
import { ITable } from './table'
import { IBar } from './bar'
import { IInventory } from './inventory'
import { ICleaning } from './cleaning'
import { IEdible } from './edible'
import { IMenu } from './menu'

export interface IRestaurant {
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