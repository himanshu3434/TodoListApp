import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      content: "todo Content",
      completed: false,
    },
  ],
  addTodo: (newtodo) => {},
  updateTodo: (id, newContent) => {},
  deleteTodo: (id) => {},
  toggleDone: (id) => {},
});
export const TodoContextProvider = TodoContext.Provider;

export function useTodos() {
  return useContext(TodoContext);
}
