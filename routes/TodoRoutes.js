const express = require("express");
const router = express.Router();
const TodoController = require("../controller/TodoController");

router.get("/todo", TodoController.ViewTodo);
router.post("/todo", TodoController.AddTodo);

module.exports = router;
