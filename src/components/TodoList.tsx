import TodoItem from "./TodoItem";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}: TodoListProps): JSX.Element {
  return (
    <ul className="flex flex-col ml-4 gap-2">
      {todos.length === 0 && "Nothing to do.."}
      {todos.map((todo) => (
        <TodoItem
          key={todo._id} // Ensure a unique key
          id={todo._id}
          title={todo.title}
          completed={todo.completed}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
