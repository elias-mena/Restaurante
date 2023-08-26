import {IBuffet} from './buffet'
import {ISpeciality} from './speciality'
import {IDrink} from './drink'
import {IGasDrink} from './gas_drink'
import {ILiquor} from './liquor'
import {IWine} from './wine'

export interface IMenu {
    buffet: [IBuffet],
    specialities: [ISpeciality],
    drinks: [IDrink],
    gas_drinks: [IGasDrink],
    liquors: [ILiquor],
    wines: [IWine],
}