import {Schema, model, Types} from 'mongoose';
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String},
    location: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    flier: {type: String, required: true},
    category: { type: Types.ObjectId, ref: 'category' }
}, {
    timestamps: true,
})

eventSchema.plugin(toJSON);
// export event model
export const eventModel = model('event', eventSchema);