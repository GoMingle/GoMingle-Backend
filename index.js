import express from "express";
import { dbconnection } from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import userRouter from "./routes/userRoutes.js";


// Connect to express app
const app = express();

// Database connection
dbconnection();

app.use(express.json());

// Use routes
app.use(eventRoutes);
app.use(userRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
