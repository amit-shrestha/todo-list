import React from 'react';

import '../assets/css/Input.css';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValue: '',
      temp: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    document.getElementsByClassName('input-form')[0].reset();
    this.props.edit
      ? this.props.onEdit(this.props.index, this.state.initialValue)
      : this.props.onAdd(this.state.temp);
    this.setState({ temp: '', initialValue: '' });
  };

  componentDidMount() {
    this.setState({ initialValue: this.props.value });
  }

  render() {
    return this.props.edit ? (
      <form onSubmit={event => this.handleSubmit(event)} className="edit-form">
        <input
          type="text"
          placeholder=""
          value={this.state.initialValue}
          onChange={event =>
            this.setState({ initialValue: event.target.value })
          }
        />
      </form>
    ) : (
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
