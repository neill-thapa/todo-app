import { createTodo } from "./createTodo.js";

export function createProject(name, description) {
  const todos = [];

  function addTodo(title, description, dueDate, priority) {
    const todo = createTodo(title, description, dueDate, priority);
    todos.push(todo);
  }

  function getTodos() {
    return todos;
  }

  function removeTodo(index) {
    todos.splice(index, 1);
  }

  function removeAllTodos() {
    todos.splice(0);
  }

  return {
    name,
    description,
    addTodo,
    getTodos,
    removeTodo,
    removeAllTodos
  };
}
