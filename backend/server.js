require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//env
const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@backenddb.lezawfb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to DB", err));

//Todo schema
const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

// Create the Todo model
const Todo = mongoose.model("Todo", todoSchema);

//Api Routes
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: req.body.completed,
  });
  const saveTodo = await newTodo.save();
  res.json(saveTodo);
});

app.put("/todos/:id", async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTodo);
});

app.delete("/todos/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
  res.json(deletedTodo);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
