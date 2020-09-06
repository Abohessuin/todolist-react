import React from 'react';


const Todo = ({ todo, text, todos, setTodos }) => {

    const trashBtnHandler = () => {

        setTodos(todos.filter((el) => el.id !== todo.id))

    }


    const completeBtnHandler = () => {
        
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
           
                return {
                    
                    ...item, completed: !item.completed
                };

            }
            return item;
        }));
        

    }


    return (

        <div className="todo">

            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeBtnHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={trashBtnHandler} className="trash-btn"><i className="fas fa-trash"></i></button>


        </div>



    );

}



export default Todo;