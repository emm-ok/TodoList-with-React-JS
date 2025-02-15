const TodoList = ({ todos, removeTodo }) => {
    return (
      <ul className="list-none p-0">
        {todos.map((todo, index) => (
          <li key={index} className='flex justify-between text-xl bg-slate-100 p-8 mx-5 my-2 rounded-md shadow-md'>
            {todo}
            <button onClick={() => removeTodo(index)} className='p-2 rounded-sm text-red-700 border-none cursor-pointer'>❌</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;
  