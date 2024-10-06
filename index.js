import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();


app.use(express.json());

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/Ricoz";

app.use("/", router);


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error occurred while connecting to the database:", err);
  });

