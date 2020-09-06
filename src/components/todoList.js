import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filterTodos }) => {

  return (

    <div className="todo-container">
      <ul className="todo-list">
          {
             filterTodos.map((todo)=>(
                
                  <Todo todo={todo} todos={todos}  setTodos={setTodos} text={todo.text} key={todo.id} />
             ))
          }
      </ul>
    </div>

  );


}


export default TodoList;