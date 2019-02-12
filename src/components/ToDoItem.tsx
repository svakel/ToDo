import React, { Component } from 'react';

const ToDoItem = (props: {todo: string}) : any => {
    return (
        <li>{props.todo}</li>
    );
}

export default ToDoItem;