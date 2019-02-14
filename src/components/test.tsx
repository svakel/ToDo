import React, { Component } from 'react';


interface Props {
  onTodoClicked: (todoId: number) => void
}
interface State { test: String }



class Test extends Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        test: ''
    }
  }

  onButtonClicked() {
      this.setState({
          test: 'derp'
      })
      this.props.onTodoClicked(1);
  }

  render() {
    return (
        <div className="Test">
            <p>test</p>
            <button onClick={() => this.onButtonClicked()} >TEST</button>
            {this.state.test}
        </div>
    );
  }
}

export default Test;
