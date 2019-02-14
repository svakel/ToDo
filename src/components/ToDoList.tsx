import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { ToDo } from '../App';
import { IState } from '../App';


// const ToDoList: React.SFC<IState> = (props: any) => {

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
                    {items.map((item: ToDo, index: number, content: string)  => <ToDoItem key={index} index={index} todo={item.content} onTodoClicked={props.onTodoClicked}/>)}
                    {/* {lista.map(item => <ToDoItem key={item.id} todo={item.content}/>)} */}
                {/* <ToDoItem todo='Ensimmäinen homma'/> */}
                </ul>
            </div>
        );
}

export default ToDoList;