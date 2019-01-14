import React from 'react';

import '../assets/css/Tool.css';

const Tool = props => {
  const { value, onClick, index } = props;

  const handleClick = () => onClick(index);

  return (
    <button className={value} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Tool;
