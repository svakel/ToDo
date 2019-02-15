import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';
import Test from './components/test';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

export interface ToDo  {
  id: number
  content: string
  done: boolean
}
// interface Props {
//   onTodoClicked: (todoId: number) => void
// }

export interface IState {
  newItem?: {
    id: number;
    content?: string;
    done: boolean;
  }
  items?: ToDo[];
  idCounter?: number;
}

class App extends Component <IState> {
  state: IState = {
    newItem: {
      id: 0,
      content: '',
      done: false
    },
    items: [],
    idCounter: 0
  };
  constructor(props: IState) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onTodoClicked = this.onTodoClicked.bind(this);
    this.onTodoDelete = this.onTodoDelete.bind(this);
    
    this.state = {
      newItem: {
        id: 0,
        content: '',
        done: false
      },
      items: [],
      idCounter: 0
    };
  }

  addItem (e: FormEvent<any>) {
    e.preventDefault()
    const todoIdCounter = this.state.idCounter;
    console.log('id', todoIdCounter);

    let testi;
    if (todoIdCounter != null) {
      testi = todoIdCounter + 1;
      console.log('id tässä', testi)
      this.setState({idCounter: testi});
    }
      
    const todoObject = {
      id: this.state.idCounter,
      content: this.state.newItem!.content,
      done: false
    }

    this.setState ({
      newItem: {
        ...this.state.newItem,
       content: ''
       },
      items: [...this.state.items, todoObject],
    });


  }

  handleInput (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    console.log(e.target.value);
    const newValue = e.target.value
    this.setState({ 
      newItem: {
       ...this.state.newItem,
      content: newValue
      }
    })
  }

  onTodoClicked (todoId: any ) : void {

    const items = this.state.items;
    let testi;
    if (typeof items !== 'undefined' && items.length > 0) {
      const indexOfTodoClicked = items.findIndex( (todo) => todo.id === todoId);
      const newItem = this.state.items![indexOfTodoClicked];
      newItem.done = !newItem.done

      this.setState({
        newItem: {
          ...this.state.newItem,
         done: !newItem.done
         },
        items: items,
        idCounter: this.state.idCounter
      });
    }
  }

  onTodoDelete(todoId: any) {
    const items = this.state.items;
    
    let testi;
    if (typeof items !== 'undefined' && items.length > 0) {
      // get index of todoID in items list
      const indexOfTodoToDelete = items.findIndex( (todo) => todo.id === todoId);
      console.log("indexOfTodoToDelete", indexOfTodoToDelete);
      const itemToDelete = items[indexOfTodoToDelete]; 
      const removedItem = items.splice(indexOfTodoToDelete, 1);
      const newList = items;

    this.setState({
      items: newList
    })
    }
  };


  render() {
    const newItem = this.state.newItem!.content;  
    return (
      <div className="App">
        <div className="container">
          
          <div className="todoListMain">
            <div className="header"> 
            <h1>ToDo-lista </h1>
            
            
            </div>
            <div className="todoForm">
              <form onSubmit={this.addItem}>
                <input
                  value={newItem}
                  onChange={this.handleInput} 
                  />
                <button type="submit">Lisää tehtävä</button>
              </form>
              </div>
            <ToDoList items={this.state.items} onTodoClicked={this.onTodoClicked} onTodoDelete={this.onTodoDelete}/>
            </div>
        
        </div>
        </div>
    );
  }
}

export default App;
