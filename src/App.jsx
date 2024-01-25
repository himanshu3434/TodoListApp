import { useEffect, useState } from "react";
import { TodoContextProvider } from "./Context/TodoContext";
import "./App.css";

import { TodoForm, TodoItem } from "./Components";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newtodo) => {
    //adding the id  in todo and fusing in the todolist
    setTodoList((prevTodo) => [{ id: Date.now(), ...newtodo }, ...prevTodo]);
  };
  const updateTodo = (id, newTodo) => {
    setTodoList((prevTodos) =>
      prevTodos.map((currentTodo) =>
        currentTodo.id === id ? newTodo : currentTodo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.filter((currentTodo) => currentTodo.id !== id)
    );
  };
  const toggleDone = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((currentTodo) =>
        currentTodo.id === id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodoList(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContextProvider
      value={{ todoList, addTodo, updateTodo, deleteTodo, toggleDone }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */ <TodoForm />}</div>
          <div className="flex flex-wrap gap-y-3">
            {
              /*Loop and Add TodoItem here */
              todoList.map((currentTodo) => (
                <div key={currentTodo.id} className="w-full">
                  <TodoItem todo={currentTodo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
