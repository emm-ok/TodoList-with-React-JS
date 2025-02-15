import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-10">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 p-8 border border-slate-800"
      />
      <button type="submit" className='bg-green-700 text-slate-50 px-8 py-12 border-none rounded cursor-pointer' >Add</button>
    </form>
  );
};

export default TodoInput;
