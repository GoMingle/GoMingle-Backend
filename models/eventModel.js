import {schema, model} from mongoose;

const eventSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String},
    location: {type: String},
    flier: {type: String},
}, {
    timestamps: true,
})

export const eventModel = model('event', eventModel);