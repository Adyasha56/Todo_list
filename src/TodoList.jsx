import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sampletask", id: uuid4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuid4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, // Toggle isDone status
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true, // Mark all tasks as done
      }))
    );
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input placeholder="Write your tasks" value={newTodo} onChange={updateTodoValue} />
      <br/>
      <button onClick={addNewTask}>Add</button>
      <br/><br/><br/><br/>
      
      <h4>Your tasks are here</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.isDone ? "completed-task" : ""}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
  
      <button onClick={markAllAsDone}>Mark All as Done</button>
    </div>
  );
  
}
