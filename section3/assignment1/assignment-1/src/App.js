import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'Adam123'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      width: '500px',
      height: '500px',
      margin: '50px auto',
      border: '1px solid green',
      backgroundColor: '#eee'
    }

    return (
      <div className="App" style={ style }>
        <UserInput changed={ this.usernameChangedHandler } name={ this.state.username } />
        <UserOutput username={ this.state.username } />
        <UserOutput username="Neil123" />
      </div>
    );
  }
}

export default App;
