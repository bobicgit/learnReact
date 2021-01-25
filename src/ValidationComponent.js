import React from 'react';

const ValidationComponent = (props) => {
    let message = props.length > 5 ? 'Text long enough' : 'Text too short';
  return (
    <div className="validation">
        {message}
    </div>
  );
}

export default ValidationComponent;