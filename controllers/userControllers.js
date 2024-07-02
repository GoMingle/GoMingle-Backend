import { userModel } from "../models/userModel.js";





// post User
export const postUser = async (req, res, next) => {
    try {
        // Add event to database
        const newUser = await userModel.create(req.body);
        // Return response
        res.json(newUser)
    } catch (error) {
        next(error)
    }
};

// update User

export const patchUser = async (req, res, next) => {
    try {
        // update User by id
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body);
        // Return response
        res.json(updateUser)
    } catch (error) {
        next(error)   
    } 
};

// Delete User
export const deleteUser = async (req, res, next) => {
    try {
        // remove an User
        const removeUser = await userModel.findByIdAndDelete(req.params.body)
        // return response
        res.json(removeUser)
    } catch (error) {
        next(error)
    }
}


    
