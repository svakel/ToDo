import React, { Component } from 'react';


interface ToDoRow {
    content: string;
}

const ToDoItem = (props: ToDoRow) : any => {
    return (
        <li>{props.content}</li>
    );
}

export default ToDoItem;