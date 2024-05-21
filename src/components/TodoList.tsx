import TodoItem from "./TodoItem";

interface Todo {
  completed: boolean;
  id: string;
  title: string;
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
    <ul>
      {todos.length === 0 && "Nothing to do.."}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
