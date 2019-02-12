import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props: any) => {
    const { items } = props;
    console.log('items', items)
    // const lista: {id: number, content: string}[] = [
    //     {id: 1, content: 'teksti1'},
    //     {id: 2, content: 'teksti2'}
    //     ];

        return (
            <div>
                <ul className="todoList">
                    {items.map((item: string, index: number)  => <ToDoItem key={index} todo={item}/>)}
                    {/* {lista.map(item => <ToDoItem key={item.id} todo={item.content}/>)} */}
                {/* <ToDoItem todo='Ensimmäinen homma'/> */}
                </ul>
            </div>
        );
}

export default ToDoList;