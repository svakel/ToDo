import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faWindowClose);

const ToDoItem = (props: {todo: string, key: number, id: number, todoDone: boolean, onTodoClicked: (todoId: number) => void, onTodoDelete: (todoId: number) => void  })  => {

const itemId = props.id;
console.log('itemID', itemId );

    return (
        <div 
            className="todo-item"
            key={itemId}>
            <div
                className="todo-item-text"
                onClick={() => props.onTodoClicked(itemId)} 
                >
                <span style={{ textDecoration: `${props.todoDone ? 'line-through' : ''}`}}
                >{props.todo}</span>
            </div>
            <button className="delete-btn" onClick={(e)=> props.onTodoDelete(itemId)}> <FontAwesomeIcon icon={faWindowClose} size="2x" /> </button>
        </div>
    );
}

export default ToDoItem;