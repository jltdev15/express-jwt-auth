const Todo = require("../model/Todo.Model");

exports.ViewTodo = async (req, res) => {
  try {
    const Todos = await Todo.find().exec();
    if (Todos.length === 0) {
      return res.send("No Todo found");
    }
    return res.status(200).json({
      status: "Success",
      content: Todos,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      content: err,
    });
  }
};
exports.AddTodo = async (req, res) => {
  const { name, isFinished } = req.body;
  try {
    const newTodo = new Todo({
      name: name,
      isFinished: isFinished,
    });
    await newTodo.save();

    if (newTodo) {
      return res.status(200).json({
        status: "Success",
        NewTodo: newTodo,
      });
    }
    // const newTodo = await Todo.create({
    //   name: name,
    //   isFinished: isFinished,
    // });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      content: err,
    });
  }
};
