import React, { Component } from 'react';
import Radium, { styleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';
import { StyleRoot } from '../node_modules/radium/lib';

class App extends Component {
  state = {
    persons: [
      { id: 'safa1', name: 'Max', age: 28 },
      { id: 'safa2', name: 'Manu', age: 29 },
      { id: 'safa3', name: 'Adam', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // const persons = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    let persons = [...this.state.persons];
    persons = persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // console.log('Was clicked!');
    // Dont DO THIS: this.state.persons[0].name = 'Maximilian';
    const dontShow = this.state.showPersons;
    this.setState({ showPersons: !dontShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={ classes.join(' ') }>This is really working!</p>
        <button
          style={ style } 
          onClick={ this.togglePersonsHandler }>Show Persons</button>
        {/* {
          this.state.showPersons ? <div>  
            <Person name={ this.state.persons[0].name } 
              age={ this.state.persons[0].age } />
            <Person name={ this.state.persons[1].name }
              age={ this.state.persons[1].age } 
              click={ this.switchNameHandler.bind(this, 'Max!!') }
              changed={ this.nameChangedHandler } />
            <Person name={ this.state.persons[2].name } 
              age={ this.state.persons[2].age }>and my hobbies are tennis</Person>
          </div> : null
        } */}
        { persons }
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', { className:"App" }, React.createElement('h1', null, 'Hi I\'m a React App'));
  }
}

export default Radium(App);
