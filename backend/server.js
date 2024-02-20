require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const recipeRoutes = require("./routes/recipes");

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/recipes", recipeRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listning on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
