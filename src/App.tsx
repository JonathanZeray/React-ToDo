import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addToDo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="bg-slate-200 h-screen flex flex-col items-center py-6">
      <NewTodoForm addToDo={addToDo} />
      <h1 className="font-extrabold text-3xl mb-6">Things to do..</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
