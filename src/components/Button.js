import React from 'react';

import '../assets/css/Button.css';

const Button = props => {
  const { onClick, value } = props;

  return (
    <button className={value} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
