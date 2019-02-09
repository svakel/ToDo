import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

// interface ToDo {
//     id: number,
//     content: string,
//     completed?: boolean
// }

// const ToDoList = (props: {items: Array<ToDo>}) => {
//     const { items } = props;
// }

// const ToDoItem = (props: ToDoItem) : any => {
//     return (
//         <li>{props.content}</li>
//     );
// }
        
// }

class ToDoList extends Component <any> {

   
    
    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        }
    }

    
    render() {
        const itemsList = this.props.items;
        console.log('lista', itemsList);

        return (
            <div>
                <ul>
                    <li>Hello!</li>
                    {/* {itemsList.map((todoItem : ToDo) => <ToDoItem key={todoItem.id} todo={todoItem.content}/>) } */}
                
                    {/* {itemsList.map(todoItem => <ToDoItem key={todoItem.id} todo={todoItem.content} />)} */}
                </ul>
            </div>
        );

    }
}



export default ToDoList;