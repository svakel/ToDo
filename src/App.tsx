import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';

interface ItemState {
  newItem?: string,
  items?: any
};


class App extends Component<ItemState> {
  state: ItemState = {
    newItem: '',
    items: []
  };
  constructor(props: ItemState) {
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
    const todoObject: any = {
      content: this.state.newItem
    }
    const items: any = this.state.items.concat(todoObject)

    this.setState({
      items: items,
      newItem: ''
    })

    console.log (items);

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

      <form onSubmit={this.addItem}>
        <input
          value={newItem}
          onChange={this.handleInput} 
          />
        <button type="submit">Lisää tehtävä</button>
      </form>

        <ToDoList />

        
      </div>
    );
  }
}

export default App;
