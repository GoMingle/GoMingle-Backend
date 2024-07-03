import {Schema, model, Types} from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String, required: true},
    eventId: {type: Types.ObjectId, ref: 'event'},
    favoriteCategory: {type: [Types.ObjectId], ref: 'category'}
}, {
    timestamps: true,
})

export const userModel = model('user', userSchema);