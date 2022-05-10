const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
const PORT = 5000;

app.use("/api/v1/tasks", taskRoute);
app.use(express.static("./public"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("サーバ起動中"));
  } catch (error){
    console.log(error);
  }
};

start();
