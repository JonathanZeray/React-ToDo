import { useState } from "react";

interface NewTodoFormProps {
  addToDo: (title: string) => void;
}

export default function NewTodoForm({ addToDo }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === "") return;

    addToDo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
      <div className="flex flex-col items-center">
        <label htmlFor="item" className="font-bold text-md">
          Add new item
        </label>
        <input
          type="text"
          autoComplete="off"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border border-gray-300 p-2 w-full"
        />
      </div>
      <button className="border border-gray-300 py-2 px-4 mt-4 rounded-md font-semibold hover:bg-green-300">
        Add
      </button>
    </form>
  );
}
