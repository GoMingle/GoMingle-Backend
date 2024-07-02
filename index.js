import express from "express";
import mongoose from "mongoose";
import { dbconnection } from "./config/db.js";
import EventRouter from "./routes/eventRoutes.js";


// Connect to express app
const app = express();

// Database connection
dbconnection();

app.use(express.json());

// Use routes
app.use(EventRouter);
// app.use();

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
