const express = require("express");
const app = express();
const port = 4000;
const TodoRoutes = require("./routes/TodoRoutes");
const UserRoutes = require("./routes/UserRoutes");
const cookieParser = require("cookie-parser");

require("./config/db_connection");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use("/api/v1/", TodoRoutes);
app.use("/api/v1/auth", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running at port  ${port}`);
});
