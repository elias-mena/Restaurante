import {Schema, model, Document} from 'mongoose';

export interface ITable extends Document {
    code: string,
    number: number,
    name: string,
    capacity: number,
    restaurant: string,
    //status: string,
}

const tableSchema = new Schema({
    code: {type: String, required: true, unique: true},
    number: {type: Number, required: true,},
    name: {type: String, required: true},
    capacity: {type: Number, required: true},
    restaurant: {type: String, required: true},
    //status: {type: String, required: true},
});

export const TableModel = model<ITable>('Table', tableSchema);


/*
example of a table:
{
    "_id": "5f9c7b0b0b9b2b1b1c1b1b1b",
    "number": 1,
    "name": "Mesa 1",
    "capacity": 4,
    "status": "available",
    "__v": 0
}
*/