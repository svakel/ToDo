import React, { Component } from 'react';

const ToDoItem = (props: {todo: string})  => {
    console.log('tuleeko', props.todo)
    return (
        <li>{props.todo}</li>
    );
}

export default ToDoItem;