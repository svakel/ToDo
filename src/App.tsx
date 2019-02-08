import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';

class App extends Component {

  addItem (e: FormEvent<any>) {
    e.preventDefault()
    console.log('Lisätty');
  }

  handleInput (e: FormEvent<any>) {
    e.preventDefault()
    console.log('Hello input');
  }


  render() {
    return (
      <div className="App">

      <form onSubmit={this.addItem}>
        <input
          // value={this.state.newItem}
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
