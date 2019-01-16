import React from 'react';
import Proptypes from 'prop-types';

/**
 *
 *
 * @class Input
 * @extends {React.Component}
 */
class Input extends React.Component {
  /**
   *
   * @memberof Input
   */
  constructor() {
    super();
    this.state = {
      editTodo: '',
      newTodo: ''
    };
  }

  /**
   *
   *
   * @memberof Input
   * @param {*} event
   */
  handleChange = event => {
    this.props.edit
      ? this.setState({ editTodo: event.target.value })
      : this.setState({ newTodo: event.target.value });
  };

  /**
   *
   *
   * @memberof Input
   * @param {*} event
   */
  handleSubmit = event => {
    event.preventDefault();
    this.props.edit
      ? this.props.onEdit(this.props.index, this.state.value)
      : this.props.onAdd(this.state.newTodo);
    this.setState({ newTodo: '', editTodo: '' });
  };

  /**
   *
   *
   * @memberof Input
   */
  componentDidMount() {
    this.setState({ editTodo: this.props.value });
  }
  /**
   *
   *
   * @returns
   * @memberof Input
   */
  render() {
    return this.props.edit ? (
      <form onSubmit={event => this.handleSubmit(event)} className="edit-form">
        <input
          type="text"
          placeholder=""
          value={this.state.editTodo}
          onChange={event => this.handleChange(event)}
        />
      </form>
    ) : (
      <form onSubmit={event => this.handleSubmit(event)} className="input-form">
        <input
          type="text"
          placeholder="Add new task"
          value={this.state.newTodo}
          onChange={event => this.handleChange(event)}
        />
        <button>Add</button>
      </form>
    );
  }
}

Input.propTypes = {
  edit: Proptypes.bool,
  onEdit: Proptypes.func,
  index: Proptypes.number,
  value: Proptypes.string,
  onAdd: Proptypes.func
};

export default Input;
