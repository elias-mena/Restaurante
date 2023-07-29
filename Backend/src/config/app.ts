import express, { Application } from 'express';
import {errorHandler, logErrors} from '../middlewares/error.middlewares';
import { AuthRouter } from '../routes/auth.router';
import { UserRouter } from '../routes/user.router';
import { RoleRouter } from '../routes/role.router';
import { EmployeeRouter } from '../routes/employee.router';
import { MeasureUnitRouter } from '../routes/measure_unit.router';
import { BuffetRouter } from '../routes/buffet.router';
import { SpecialityRouter } from '../routes/speciality.router';
import { BrandRouter } from '../routes/brand.router';
import { CountryRouter } from '../routes/country.router';
import { WineRouter } from '../routes/wine.router';
import { LiquorRouter } from '../routes/liquor.router';
import { GasDrinkRouter } from '../routes/gas_dink.router';
import { DrinkRouter } from '../routes/drink.router';
import { EdibleRouter } from '../routes/edible.router';
import { CleaningRouter } from '../routes/cleaning.router';
import { InventoryRouter } from '../routes/inventory.router';
import { SupplierRouter } from '../routes/supplier.router';
//import { ConsecutiveRouter } from '../routes/consecutive.router';
/*
import {OrderRouter} from '../routes/order.router';
import {CustomerRouter} from '../routes/customer.router';

*/

export class App {
    private readonly _instance: Application;

    get instance(): Application {
        return this._instance;
    }

    constructor() {
        this._instance = express();
        this._instance.use(express.json());
        this.registerRouters();
        // The middlewares are registered always after the routes
        this._instance.use(logErrors);
        this._instance.use(errorHandler);

    }

    private registerRouters(): void {
        // Here we register the routes
        this._instance.use('/users', new UserRouter().router);
        this._instance.use('/auth', new AuthRouter().router);
        this._instance.use('/roles', new RoleRouter().router);
        this._instance.use('/employees', new EmployeeRouter().router);
        this._instance.use('/measure_units', new MeasureUnitRouter().router);
        this._instance.use('/buffet', new BuffetRouter().router);
        this._instance.use('/specialities', new SpecialityRouter().router);
        this._instance.use('/brands', new BrandRouter().router);
        this._instance.use('/countries', new CountryRouter().router);
        this._instance.use('/wines', new WineRouter().router);
        this._instance.use('/liquors', new LiquorRouter().router);
        this._instance.use('/gas-drinks', new GasDrinkRouter().router);
        this._instance.use('/drinks', new DrinkRouter().router);
        this._instance.use('/edibles', new EdibleRouter().router);
        this._instance.use('/cleaning', new CleaningRouter().router);
        this._instance.use('/inventory', new InventoryRouter().router);
        this._instance.use('/suppliers', new SupplierRouter().router);
        //this._instance.use('/orders', new OrderRouter().router);
        //this._instance.use('/customers',CustomerRouter);
    }
}

