import React from 'react';

const Form = ({ inputText, setinputText, todos, setTodos, setState }) => {

    const inputtextHandler = (e) => {

        setinputText(e.target.value);
    }


    const todosHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }])
        setinputText("");

    }

    const stateHandler = (e) => {

        setState(e.target.value);

    }
    return (

        <form>
            <input value={inputText} onChange={inputtextHandler} type="text" className="todo-input" />
            <button onClick={todosHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={stateHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>


    );


}



export default Form;