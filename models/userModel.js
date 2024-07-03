import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userName: {type: String, required: true},
    eventId: {type: Types.ObjectId, ref: 'eventModel'},
}, {
    timestamps: true,
});

export const userModel = model('user', userSchema);