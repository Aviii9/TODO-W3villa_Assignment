import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://avishkak29:g9i2wPVRIne7rzNm@todo.v26kubx.mongodb.net/?retryWrites=true&w=majority&appName=TODO`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;