export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
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
