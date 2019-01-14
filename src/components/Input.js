import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      temp: ''
    };
  }

  handleChange = event => {
    this.props.edit
      ? this.setState({ value: event.target.value })
      : this.setState({ temp: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.edit
      ? this.props.onEdit(this.props.index, this.state.value)
      : this.props.onAdd(this.state.temp);
    this.setState({ temp: '', value: '' });
  };

  componentDidMount() {
    this.setState({ value: this.props.value });
  }

  render() {
    return this.props.edit ? (
      <form onSubmit={event => this.handleSubmit(event)} className="edit-form">
        <input
          type="text"
          placeholder=""
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />
      </form>
    ) : (
      <form onSubmit={event => this.handleSubmit(event)} className="input-form">
        <input
          type="text"
          placeholder="Add new task"
          value={this.state.temp}
          onChange={event => this.handleChange(event)}
        />
      </form>
    );
  }
}

export default Input;
