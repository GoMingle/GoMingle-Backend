import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String},
    location: {type: String},
    flier: {type: String, required: true},
}, {
    timestamps: true,
})

export const eventModel = model('event', eventSchema);