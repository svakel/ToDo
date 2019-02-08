import React, { Component } from 'react';

const ToDoItem = (props: {todo: string}) : any => {
    return (
        <p>{props.todo}</p>
    );
}

export default ToDoItem;