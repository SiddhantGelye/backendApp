import express from "express";
const app = express();

import cors from "cors";
import cookieParser from "cookie-parser";

//the use of cookerparser is that we can access the cookies of browser and perform CRUD operation on that cookie file

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());
export { app };
