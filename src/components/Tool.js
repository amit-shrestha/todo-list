import React from 'react';

import '../assets/css/Tool.css';

const Tool = props => {
  const { value, action, index } = props;

  return (
    <button className={value} onClick={() => action(index)}>
      {value}
    </button>
  );
};

export default Tool;
