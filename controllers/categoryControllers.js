import { CategoryModel } from "../models/categoryModel.js";

export const getCategories = async (req, res, next) => {
    try {
        const retrieveCategories = await CategoryModel.find();
        res.json(retrieveCategories);
    } catch (error) {
        next(error)
    }
}

// Run Once to populate the database
export const postCategory = async (req, res, next) => {
    try {
        const addCategory = await CategoryModel.create(req.body);
        res.json(addCategory);
    } catch (error) {
        next(error);
    }
}

// // update Category
// export const patchCategory = async (req, res, next) => {
//     try {
//         const updateCategory = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.json(updateCategory);
//     } catch (error) {
//         next(error)
//     }
//  }
 
//  // Delete Category
//  export const deleteEvent = async (req, res, next) => {
//      try {
//          const removeCategory = await CategoryModel.findByIdAndDelete(req.params.body)
//          res.json(removeCategory)
//      } catch (error) {
//          next(error)
//      }
//   }