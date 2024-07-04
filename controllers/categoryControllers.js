import { categoryModel } from "../models/categoryModel.js";

export const getCategories = async (req, res, next) => {
    try {
        const retrieveCategories = await categoryModel.find();
        res.status(200).json(retrieveCategories);
    } catch (error) {
        next(error)
    }
}

// Run Once to populate the database
export const postCategory = async (req, res, next) => {
    try {
        const addCategory = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        res.status(201).json(addCategory);
    } catch (error) {
        next(error);
    }
}

// // update Category
// export const patchCategory = async (req, res, next) => {
//     try {
//         const updateCategory = await categoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.status(200).json(updateCategory);
//     } catch (error) {
//         next(error)
//     }
//  }
 
//  // Delete Category
//  export const deleteEvent = async (req, res, next) => {
//      try {
//          const removeCategory = await categoryModel.findByIdAndDelete(req.params.body)
//          res.status(200).json(removeCategory)
//      } catch (error) {
//          next(error)
//      }
//   }