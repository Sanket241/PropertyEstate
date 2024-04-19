import dotenv from 'dotenv';
import express from 'express';
import MongoDb from './db/Conn.js';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import listingRouter from './routes/listingRoute.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})



const start = async () => {
    try {
        await MongoDb(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
    catch {
        console.log('Server is not running');
    }
}
start()
