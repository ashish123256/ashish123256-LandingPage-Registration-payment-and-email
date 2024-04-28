import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRegister.js";
import paymentRoutes from "./routes/paymentRoute.js";
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error(err);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});


app.use("/users", userRoutes);
app.use("/api",paymentRoutes)

app.use((err, req,res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})