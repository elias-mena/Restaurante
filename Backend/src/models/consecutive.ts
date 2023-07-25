import {Schema, model, Document} from 'mongoose';

export interface IConsecutive extends Document {
    code: string,
    type: string,
    description: string,
    value: number,
    has_prefix: boolean,
    prefix: string,
}

const consecutiveSchema = new Schema({
    code: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    value: {type: Number, required: true},
    has_prefix: {type: Boolean, required: true},
    prefix: {type: String, required: true},
});

export const ConsecutiveModel = model<IConsecutive>('Consecutive', consecutiveSchema);
