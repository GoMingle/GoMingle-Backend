import cors from "cors";
import express from "express";
import { dbconnection } from "./config/db.js";
import EventRouter from "./routes/eventRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";



// Connect to express app
const app = express();

// Database connection
dbconnection();

app.use(express.json());
app.use(cors());

// Use routes
app.use(EventRouter);
app.use(CategoryRouter);


// app.use();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
