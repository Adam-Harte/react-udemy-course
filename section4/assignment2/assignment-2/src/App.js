import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  textChangeHandler = (event) => {
    const newText = event.target.value;
    this.setState({text: newText})
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textChangeHandler(event)} />
        <p>{ this.state.text }</p>
      </div>
    );
  }
}

export default App;
