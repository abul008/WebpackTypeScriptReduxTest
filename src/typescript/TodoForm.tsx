import React from "react";
import { ITodo } from "./interfaces";

type TodolistProps = {
    todos:ITodo[]
}

export const TodoForm: React.FC<TodolistProps> = ({todos}) =>{
    return(
         <ul>
             {todos.map(todo =>{
                 const Clases = ['todo']
                 if(todo.completed){
                   Clases.push('compledet')
                 }
                 return(
                    <li className={Clases.join('')} key={todo.id}>
                    <label>
                        <input type='checkbox'  checked={todo.completed}/>
                        <span></span>
                        <i className="material-icons red-text">delete</i>
                    </label>
                </li>
                 )
             })}
            
         </ul>
    )
}