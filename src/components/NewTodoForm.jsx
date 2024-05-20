import { useState } from "react";

export default function NewTodoForm({ addToDo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    addToDo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="item">New item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border border-gray-300 p-2 w-1/3"
        />
      </div>
      <button className="border border-gray-300 p-2 rounded-md">Add</button>
    </form>
  );
}
