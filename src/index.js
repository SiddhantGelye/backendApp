// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log("app is running at port ", process.env.PORT);
  })
  .catch((error) => {
    console.log("Mongodb connection error", error);
  });

/* import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error");
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port, ${process.env.PORT} `);
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
})();
*/
