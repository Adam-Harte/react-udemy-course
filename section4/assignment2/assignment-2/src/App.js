import React, { Component } from 'react';
import './App.css';
import Validation from './Validation';
import Char from './Char';

class App extends Component {
  state = {
    text: ''
  }

  textChangeHandler = (event) => {
    const newText = event.target.value;
    this.setState({text: newText})
  }

  updateText = (chars) => {
    const joinedText = chars.join('');
    this.setState({text: joinedText});
  }

  removeChar = (index) => {
    const chars = this.state.text.split('');
    chars.splice(index, 1);
    this.updateText(chars);
  }

  render() {
    let characters = null;

    if (this.state.text.length) {
      characters = (
        <div>
          { this.state.text.split('').map((char, index) => {
            return <Char char={ char } remove={ () => this.removeChar(index) } />
          }) }
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textChangeHandler(event)} value={ this.state.text } />
        <p>{ this.state.text.length }</p>
        <Validation length={ this.state.text.length } />
        { characters }
      </div>
    );
  }
}

export default App;
