import React from 'react';

import '../assets/css/Tools.css';
class Tools extends React.Component {
  render() {
    return (
      <button
        className="tool"
        onClick={() => this.props.onClick(this.props.index)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Tools;
