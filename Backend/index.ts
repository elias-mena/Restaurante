import { AuthRouter } from './src/routes/auth.router';
import { UserRouter } from './src/routes/user.router';
import { RoleRouter } from './src/routes/role.router';
import { EmployeeRouter } from './src/routes/employee.router';
import { MeasureUnitRouter } from './src/routes/measure-unit.router';
import { BuffetRouter } from './src/routes/buffet.router';
import { SpecialityRouter } from './src/routes/speciality.router';
import { BrandRouter } from './src/routes/brand.router';
import { CountryRouter } from './src/routes/country.router';
import { WineRouter } from './src/routes/wine.router';
import { LiquorRouter } from './src/routes/liquor.router';
import { GasDrinkRouter } from './src/routes/gas-dink.router';
import { DrinkRouter } from './src/routes/drink.router';
import { EdibleRouter } from './src/routes/edible.router';
import { CleaningRouter } from './src/routes/cleaning.router';
import { InventoryRouter } from './src/routes/inventory.router';
import { SupplierRouter } from './src/routes/supplier.router';
import { BinnacleRouter } from './src/routes/binnacle.router';
import { CashierRouter } from './src/routes/cashier.router';
import { BarRouter } from './src/routes/bar.router';
import { RestaurantRouter } from './src/routes/restaurant.router';
import { TableRouter } from './src/routes/table.router';
import {OrderRouter} from './src/routes/order.router';
import { ConsecutiveRouter } from './src/routes/consecutive.router';
import { CustomerRouter } from './src/routes/customer.router';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/restaurante');

const port = 5000;

app.listen(port, () => {
  console.log(`Está aplicacion corre en la siguiente ruta http://localhost:${port}/`);
});

app.use(
  cors({
    origin: '*',
  })
);

app.use('/users', new UserRouter().router);
app.use('/auth', new AuthRouter().router);
app.use('/roles', new RoleRouter().router);
app.use('/employees', new EmployeeRouter().router);
app.use('/measure_units', new MeasureUnitRouter().router);
app.use('/buffet', new BuffetRouter().router);
app.use('/specialities', new SpecialityRouter().router);
app.use('/brands', new BrandRouter().router);
app.use('/countries', new CountryRouter().router);
app.use('/wines', new WineRouter().router);
app.use('/liquors', new LiquorRouter().router);
app.use('/gas-drinks', new GasDrinkRouter().router);
app.use('/drinks', new DrinkRouter().router);
app.use('/edibles', new EdibleRouter().router);
app.use('/cleaning', new CleaningRouter().router);
app.use('/inventory', new InventoryRouter().router);
app.use('/suppliers', new SupplierRouter().router);
app.use('/binnacle', new BinnacleRouter().router);
app.use('/cashier', new CashierRouter().router);
app.use('/bar', new BarRouter().router);
app.use('/table', new TableRouter().router);
app.use('/restaurant', new RestaurantRouter().router);
app.use('/orders', new OrderRouter().router);
app.use('/customers', new CustomerRouter().router);
app.use('/consecutives', new ConsecutiveRouter().router);