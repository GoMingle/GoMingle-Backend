import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    subscriptions: { type: [Types.ObjectId], ref: 'event' },
    // favoriteCategory: { type: Types.ObjectId, ref: 'category' }
}, {
    timestamps: true,
})

userSchema.plugin(toJSON);

export const userModel = model('user', userSchema);