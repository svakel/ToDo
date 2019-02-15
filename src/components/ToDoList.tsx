import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { ToDo } from '../App';
import { IState } from '../App';


// const ToDoList: React.SFC<IState> = (props: any) => {

const ToDoList = (props: any) => {
    const { items } = props;

        return (
            <div>
                <div className="todoList">
                    {items.map((item: ToDo, content: string, id: number)  => <ToDoItem key={item.id} id={item.id} todo={item.content} todoDone={item.done} onTodoClicked={props.onTodoClicked} onTodoDelete={props.onTodoDelete}/>)}
                </div>
            </div>
        );
}

export default ToDoList;