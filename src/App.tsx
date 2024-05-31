import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import ParentComponent from "./components/ParentComponent";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addToDo = (title: string) => {
    axios
      .post("http://localhost:5000/todos", { title, completed: false })
      .then((response) => {
        setTodos([...todos, response.data]);
      });
  };

  const toggleTodo = (id: string, completed: boolean) => {
    axios
      .patch(`http://localhost:5000/todos/${id}`, { completed })
      .then((response) => {
        setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
      });
  };

  const deleteTodo = (id: string) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <>
      <div className="bg-slate-200 h-screen flex flex-col items-center py-6">
        <NewTodoForm addToDo={addToDo} />
        <h1 className="font-extrabold text-3xl mb-6">Things to do..</h1>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <ParentComponent />
      </div>
    </>
  );
}
