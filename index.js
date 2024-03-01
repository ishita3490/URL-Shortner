const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();

connectToMongoDB("mongodb://localhost:27017/short_url")
    .then(() => {
        console.log("MongoDB connected");
        
        // Start the server once MongoDB is connected
        const server = app.listen(3000, () => {
            console.log(`Server Started at PORT:${server.address().port}`);
        });
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));

app.use("/url", urlRoute);
