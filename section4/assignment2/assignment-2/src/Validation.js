import React from 'react';

const validation = (props) => {
   return <div className="validation">
      { props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p> }
   </div>
};

export default validation;