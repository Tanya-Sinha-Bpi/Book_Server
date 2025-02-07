import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoutes.js';
import UserRoute from './Routes/UserRoutes.js';
import BookRoute from './Routes/BookRoutes.js'
import cookieParser from "cookie-parser";

dotenv.config()
const app = express()


const allowedOrigins = ["http://localhost:5173" ,"exp://192.168.89.3:8081", "http://localhost:19000",'https://book-server-v7nw.onrender.com'];

app.use(
    cors({
      // origin: process.env.ORIGIN || '*',
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
        "Origin",
        "X-Custom-Header",
      ],
    })
  );

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser()); 
// routes

app.use('/api/auth', AuthRoute);
app.use('/api/user', UserRoute);
app.use('/api/book-admin', BookRoute);


export default app;