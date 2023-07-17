import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
app.get("/ping",(req,res)=>{
  res.send("pong")
})

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

//  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-nlt5dce-shard-00-00.hgdkuit.mongodb.net:27017,ac-nlt5dce-shard-00-01.hgdkuit.mongodb.net:27017,ac-nlt5dce-shard-00-02.hgdkuit.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-y6vy88-shard-0&authSource=admin&retryWrites=true&w=majority`;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart-web.hgdkuit.mongodb.net/flipkart?retryWrites=true&w=majority`;
Connection(URL);

if (process.env.MODE_ENV === "production") {
  app.use(express.static("flipkart/build"));
}

app.listen(PORT, () =>
  console.log(`server is running successfully on port ${PORT}`)
);

DefaultData();
