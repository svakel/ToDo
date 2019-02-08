import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {

    render() {
        return (
            <div>
                <ToDoItem todo='Ensimmäinen homma'/>

            </div>
        );
    }
}

export default ToDoList;