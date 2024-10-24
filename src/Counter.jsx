import { useState } from "react";


export default function Counter(){
  let [setVariable,setStateVariable] = useState(0);
  let [count,setCount] = useState(0);
  let incCount = () =>{
   setCount(count+1); //trigger re render
    };


    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Inc Count</button>
        </div>
    );
}