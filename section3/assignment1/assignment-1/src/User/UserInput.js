import React from 'react';
import './User.css'

const userInput = (props) => {
   return <input type="text" onChange={ props.changed } value={ props.name }/>
};

export default userInput;