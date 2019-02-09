import React, { Component } from 'react';
import { FormEvent } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';

// const initialState = {
//   newItem: {
//         id: 0,
//         content: '',
//         completed: false
//       },
//       items: []
// }

// type State = Readonly<typeof initialState>

interface ToDo {
  id: number;
  content: string;
  completed: boolean;
}

// export interface IProps {
//   items?: [],
//   newItem: {
//     id: number;
//     content: string;
//     completed: boolean;
//   }
// }

export interface IState {
  items: ToDo[],
  newItem: {
    id: number;
    content: string;
    completed: boolean;
  }
}

class App extends Component<IState, ToDo> {

  state: IState = {
    items: [],
    newItem: {
      id: 0,
      content: '',
      completed: false
    }
    
  };

  // public state = {
  //   items: this.props.items,
  //   newItem: {
  //     id: this.props.newItem.id,
  //     content: this.props.newItem.content,
  //     completed: this.props.newItem.completed
  //   }
  // };

  constructor(props: IState) {
    super(props);
    this.state = {
      items: this.props.items,
      newItem: {
        id: 0,
        content: '',
        completed: false
      }
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }


  // readonly state: State = initialState
  // state: ItemState = {
  //   newItem: {
  //     id: 0,
  //     content: '',
  //     completed: false
  //   },
  //   items: []
  // };

  // state: ItemState = {
  //   newItem: '',
  //   items: []
  // };

  

  addItem (e: FormEvent<any>) {
    e.preventDefault()
    const todoObject  = {
      id: this.state.items.length + 1,
      content: 'testi',
      completed: false
    } as ToDo
    console.log(todoObject);

    const items = this.state.items.concat(todoObject);

    this.setState({
      items: items
    });

  //   this.setState({
  //     editorState: editorState
  // } as MainState);

    console.log (items);
  }

  handleInput (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    console.log(e.target.value);
    this.setState({
      newItem: {
        id: 0,
        content: e.target.value,
        completed: false
      }
    });
  }


  render() {
    const newItemContent = this.state.newItem.content;
    return (
      <div className="App">

      <h1>ToDo -lista</h1>

      <form onSubmit={this.addItem}>
        <input
          value={newItemContent}
          onChange={this.handleInput} 
          />
        <button type="submit">Lisää tehtävä</button>
      </form>

        <ToDoList items={this.state.items}/>

        
      </div>
    );
  }
}

export default App;
