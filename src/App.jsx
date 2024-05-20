import "./styles.css";

export default function App() {
  return (
    <>
    <div className="w-1/2">
      <form>
        <div className="flex flex-col">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" className="border border-gray-300 p-2 w-1/3"/>
        </div>
        <button className="border border-gray-300 p-2 rounded-md">Add</button>
      </form>
      <h1>Todo list</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="border border-gray-300 p-2 rounded-md">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="border border-gray-300 p-2 rounded-md">Delete</button>
        </li>
      </ul>
    </div>
    </>
  );
};