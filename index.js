import cors from "cors";
import express from "express";
import { dbconnection } from "./config/db.js";
import expressOasGenerator from "express-oas-generator";
import EventRouter from "./routes/eventRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import authRouter from "./routes/authRoutes.js";



// Connect to express app
const app = express();

// Database connection
dbconnection();

app.use(express.json());
app.use(cors());

// Use routes
app.use(cors)
app.use(EventRouter);
app.use(CategoryRouter);
app.use(authRouter);
// API DOCS
app.use((req,res) => res.redirect('/api-docs/'));


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
