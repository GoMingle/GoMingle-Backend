import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import { dbconnection } from "./config/db.js";
import EventRouter from "./routes/eventRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import authRouter from "./routes/authRoutes.js";



// Connect to express app
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['Users', 'Events', 'Event Categories'],
    mongooseModels: mongoose.modelNames(),
});

// Database connection
dbconnection();

app.use(express.json());
app.use(cors());

// Use routes
app.use(EventRouter);
app.use(CategoryRouter);
app.use(authRouter);
// API DOCS
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs/'));


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
