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
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="mr-2"
        />
        {title}
      </label>
      <button
        className="border border-gray-300 p-2 rounded-md ml-2 hover:bg-red-300"
        onClick={() => deleteTodo(id)}
      >
        delete
      </button>
    </li>
  );
}
