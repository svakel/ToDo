import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';

interface IState {
  newItem?: string,
  items?: any
};


class App extends Component<IState> {
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
    const todoObject: any = {
      content: this.state.newItem,
      id: this.state.items.length + 1
    }
    const items: [] = this.state.items.concat(todoObject)
    console.log(items)

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

        <ToDoList items={this.state.items} />

        
      </div>
    );
  }
}

export default App;
