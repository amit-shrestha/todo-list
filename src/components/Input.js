import React from 'react';

import '../assets/css/Input.css';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementsByClassName('input-form')[0].reset();
    this.props.onAdd(this.state.temp);
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} className="input-form">
        <input
          type="text"
          placeholder="Add new task"
          onChange={event => this.setState({ temp: event.target.value })}
        />
      </form>
    );
  }
}

export default Input;
