import mongoose from "mongoose";

const mongoPort = 27017;
const mongoURL = `mongodb://localhost:${mongoPort}/timeline`;

// 连接 MongoDB
mongoose
    .connect(mongoURL)
    .then(() => {
        console.log(`Successfully connected to MongoDB at ${mongoURL}.`);
    })
    .catch((err: string) => {
        console.error(`Error while connecting MongoDB: ${err}`);
    });
