import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const categorySchema = new Schema ({
    categoryName: {type: String, required: true, unique: true},
    image: {type: String, required: true}
}, {
    timestamps: true
})


categorySchema.plugin(toJSON);
// Export CategoryModel
export const categoryModel = model('category', categorySchema);