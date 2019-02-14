import React, { Component } from 'react';

const ToDoItem = (props: {todo: string, key: number, index: number, onTodoClicked: (todoId: number) => void })  => {

  
    // const clickDone = () => {
    //     // e.preventDefault();
    //     console.log('clicked')
    // }
   


    
    return (
        <li key={props.index}
        onClick={() => props.onTodoClicked(props.index)} 
        // style={{ textDecoration: `${todo.done ? 'line-through' : ''}, cursor: 'pointer` }}
        className="todo-item">
        {props.todo}
        </li>
    );
}

export default ToDoItem;