import { useState } from 'react'
import {Navbar} from "./navbar";
import {Tudulist} from "./Todulist";
import {TodoForm} from "./TodoForm";
import { ITodo } from './interfaces';
import {ThowError} from  "./demo";

export const Counter:React.FC = () => {
  const [todus,setTodos] = useState<ITodo[]>([]) 
  const [count, setCount] = useState<string | number>(0)

  const addHeader = (title:string) =>{
    const newTodo: ITodo = {
      title:title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo , ...todus])
  }
  ThowError("hello")
  return (
    <div>
       <Navbar />
       <div className='container'>
        <Tudulist onAdd={addHeader} />
        <TodoForm todos={todus} />
     
       </div>
    </div>
  )
}