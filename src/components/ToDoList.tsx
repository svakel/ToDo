import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props: any) => {
    const { items } = props;

        return (
            <div>
                <ul>
                    {items.map((item: any, key: string) => <ToDoItem key={item.id} todo={item}/>)}
                {/* <ToDoItem todo='Ensimmäinen homma'/> */}
                </ul>
            </div>
        );
}

export default ToDoList;