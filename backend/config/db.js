import mongoose from 'mongoose';

export const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGO DB connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log('error.message :>> ', error.message);
        process.exit(1) // 1 is failure 
                        // 0 is success
    }
}