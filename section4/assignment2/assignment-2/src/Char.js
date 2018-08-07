import React from 'react';

const char = (props) => {
   return <div className="char" onClick={ props.remove }>
      <p>{ props.char }</p>
   </div>
};

export default char;