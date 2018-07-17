import React from 'react';
import './User.css'

const userOutput = (props) => {
   return <div>
         <p>Below is the username</p>
         <p>{ props.username }</p>
      </div>
};

export default userOutput;