import "dotenv/config";
import express from "express";
import { connect } from "./database/connection.js";
import path from"path"
import { fileURLToPath } from "url";
const _filename = fileURLToPath(import.meta.url);
import morgan from "morgan";
import cors from "cors";
import User from "./database/modals/user.js";
import userRouter from "./routes/user.js";
import {errorHandler} from "./middlewares/errorMiddleware.js";

// setup file path
const _dirname = path.dirname(_filename);
console.log("directory-name--> ", _dirname);

// create express app
const app = express();

// middleware to parse JSON request bodies
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static('info.html'));
app.use(errorHandler);

//create database connection
connect();

// API Routes
app.get("/status" , (req, res, next) => {
    res.status(200).json({ message: "server is connected"});
});

// use the userRouter for the '/auth' path
app.use("/api/user", userRouter);

// start server
const PORT = process.env.PORT;
app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on ${PORT} port`);
});