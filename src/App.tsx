import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';


// type ToDo = {
//   id: number;
//   content?: string;
// }

interface IState {
  newItem?: string;
  items?: String[];
}

class App extends Component <IState> {
  state: IState = {
    newItem: '',
    items: []
  };
  constructor(props: IState) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      newItem: '',
      items: []
    };
  }

  addItem (e: FormEvent<any>) {
    e.preventDefault()
    
    console.log (this.state.items)

    this.setState({
      newItem: '',
      items: [...this.state.items, this.state.newItem]  
    });

    
    // const todoObject = {
    //   id: this.state.items.length + 1,
    //   content: this.state.newItem,
    // }
    // const items = this.state.items.concat(todoObject)
    // console.log(items)

    // this.setState({
    //   items: items,
    //   newItem: ''
    // })
  }

  handleInput (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    console.log(e.target.value);
    this.setState({newItem: e.target.value});
  }


  render() {
    const newItem = this.state.newItem;
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
            <ToDoList items={this.state.items} />
            </div>
        </div>
        </div>
    );
  }
}

export default App;
