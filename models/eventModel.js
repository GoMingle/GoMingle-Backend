import {Schema, model, Types} from 'mongoose';
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    eventName: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    date: {type: Date, required: true},
    price: {type: String},
    image: {type: String, required: true},
}, {
    timestamps: true,
})

eventSchema.plugin(toJSON);
// export event model
export const eventModel = model('event', eventSchema);