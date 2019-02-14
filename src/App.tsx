import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';
import Test from './components/test';

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
}

class App extends Component <IState> {
  state: IState = {
    newItem: {
      id: 0,
      content: '',
      done: false
    },
    items: []
  };
  constructor(props: IState) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onTodoClicked = this.onTodoClicked.bind(this);
    this.state = {
      newItem: {
        id: 0,
        content: '',
        done: false
      },
      items: []
    };
  }

  addItem (e: FormEvent<any>) {
    e.preventDefault()
    
    

    const todoObject = {
      id: this.state.items!.length + 1,
      content: this.state.newItem!.content
    }

    this.setState({
      newItem: {
        ...this.state.newItem,
       content: ''
       },
      items: [...this.state.items, this.state.newItem]  
    });

    console.log (this.state.items)

    
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

  // deleteItem = (key: number) => {
  //   const filteredItems = this.state.items.filter(item => {
  //     return item.key !== key
  //   })
  //   this.setState({
  //     items: filteredItems
  //   })
  // }

  onTodoClicked (todoId: any) : void  {
    console.log("onTodoClicked: todoId: ", todoId);
    const items = this.state.items;
    console.log("ITEMS tässä ", items);
    const newItem = this.state.items![todoId];
    // console.log("newItem tässä ", newItem);
    newItem.done = !newItem.done
    
    // if (this.state.items!.length > 0 ) {
    //   const result = this.state.items!.find(i => i.id === todoId);
    //   console.log('löytyykö?', result)
    // } 
    
    this.setState({
      newItem: {
        ...this.state.newItem,
       done: !newItem.done
       }
    });

    



    // console.log (this.state.items)

    console.log("newItem tässä ", newItem);

  }

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
            <ToDoList items={this.state.items} onTodoClicked={this.onTodoClicked}/>
            </div>
        
        </div>
        </div>
    );
  }
}

export default App;
