import mongoose from 'mongoose';

const MongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected");
    }
    catch (error) {
      console.log(error);
    }
}
export default MongoDb;

