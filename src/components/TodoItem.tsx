interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}: TodoItemProps): JSX.Element {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="border border-gray-300 p-2 rounded-md"
        onClick={() => deleteTodo(id)}
      >
        delete
      </button>
    </li>
  );
}
