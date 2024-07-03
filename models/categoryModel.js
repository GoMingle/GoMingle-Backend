import { Schema, model } from "mongoose";

const categorySchema = new Schema ({
    categoryName: {type: String, required: true, unique: true},
    image: {type: String, required: true}
}, {
    timestamps: true
})

// Export CategoryModel
export const categoryModel = model('category', categorySchema);