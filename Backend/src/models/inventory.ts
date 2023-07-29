import {Schema, model, Document} from 'mongoose';

export interface IInventory extends Document {
    code: string,
    name: string,
    description: string,
    brand_code: string,
    amount: number,
    inventory_type: string,
}

const inventorySchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    brand_code: {type: String, required: true},
    amount: {type: Number, required: true},
    inventory_type: {type: String, required: true},
});

export const InventoryModel = model<IInventory>('Inventory', inventorySchema);

/*
Example 
{
    "name": "Dispensador de refrescos",
    "description": "Dispensador de refrescos",
    "brand_code": "M-1",
    "amount": 3,
    "inventory_type": "Equipments",
}
*/