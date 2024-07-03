import {Schema, model} from 'mongoose';

const eventSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String},
    location: {type: String},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    flier: {type: String, required: true},
}, {
    timestamps: true,
})

// e
export const eventModel = model('event', eventSchema);