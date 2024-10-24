import { useState } from "react"
import { v4 as uuid4} from "uuid";

export default function TodoList(){
    let [todos , setTodos] = useState([{task:"sampletask",id:uuid4()}])
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = ()=>{
        //console.log("we have to add new task");
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuid4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        // console.log(event.target.value)
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id)=>{
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id ));
        // console.log(id);
    }

    let uppercaseAll = () =>{

    }

    return(
        <div>
            <h3>Todo List</h3>
            <input placeholder="Write your tasks" value={newTodo} onChange={updateTodoValue}/>
            <br/>
            <button onClick={addNewTask}>add</button>
            <br/><br/><br/><br/>

            <h4>Your tasks are here</h4>
           
            <ul>
                {
                    todos.map((todo) => (
                         <li key={todo.id}>
                            <span> {todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>remove</button>
                         </li>
                    ))
                }
            </ul>

            
        </div>
    );
}