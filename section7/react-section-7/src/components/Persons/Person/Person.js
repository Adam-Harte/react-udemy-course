import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/withClass';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super (props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
      }

      componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
      }

      componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
      }

      focus () {
          this.inputElement.current.focus();
      }

    render () {
        return (
        <Aux>
            <AuthContext.Consumer>
                {auth => auth ? <p>I'm Authenticated</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input ref={ this.inputElement } type="text" onChange={this.props.changed} value={this.props.name} />
        </Aux>
    )
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        //     <p key="2">{this.props.children}</p>
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
};

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
};

export default withClass(Person, classes.Person);