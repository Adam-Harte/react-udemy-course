import React from 'react';

const char = (props) => {
   return <div className="characters" onClick={ props.remove }>
      <p>{ props.char }</p>
   </div>
};

export default char;