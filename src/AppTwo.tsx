
import React from 'react';
import TodoList from './components/todolist';
import UserList from "./components/UserList";

export const AppTwo  = () => {

  return (
    <div className="App">
     <UserList/>
     <hr/>
     <TodoList/>
    </div>
  );
}
