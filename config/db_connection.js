const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error in connecting to database", err));
