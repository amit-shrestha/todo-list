import React from 'react';

import '../assets/css/Button.css';
class Button extends React.Component {
  render() {
    return (
      <button
        className="btn"
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
