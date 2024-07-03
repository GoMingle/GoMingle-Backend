import { userModel } from "../models/userModel.js";



// Post User
export const postUser = async (req, res, next) => {
    try {
        // Add user to database
        const newUser = await userModel.create(req.body);
        // Return response
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

// Patch User
export const patchUser = async (req, res, next) => {
    try {
        // Update user by id
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Return response
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
};

// Delete User
export const deleteUser = async (req, res, next) => {
    try {
        // Remove a user
        const removeUser = await userModel.findByIdAndDelete(req.params.id);
        // Return response
        res.status(204).json(removeUser);
    } catch (error) {
        next(error);
    }
};


    
