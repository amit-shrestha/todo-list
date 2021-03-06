import React from 'react';

import '../assets/css';
import TodoListWrapper from './TodoListWrapper';
import * as Filter from '../Constants/Filter';
/**
 *
 *
 * @class App
 * @augments {React.Component}
 *
 */
class App extends React.Component {
  /**
   * @memberof App
   */
  constructor() {
    super();
    this.state = {
      todos: [],
      searchParameter: '',
      option: Filter.ALL
    };
  }

  /**
   * @memberof Input
   * @param {string} task
   */
  addTodo = task => {
    if (this.isTaskValid(task)) {
      this.setState({
        todos: [
          {
            todo: task,
            isCompleted: false,
            isEditing: false
          },
          ...this.state.todos
        ]
      });
    }
  };

  /**
   * @memberof Input
   * @param {number} index
   */
  completeTodo = index => {
    const todos = this.state.todos.map((currentTodo, itemIndex) => {
      if (itemIndex !== index) {
        return currentTodo;
      }

      return {
        ...currentTodo,
        isCompleted: !currentTodo.isCompleted
      };
    });

    this.setState({ todos });
  };

  /**
   * @memberof Input
   * @param {string} option
   */
  changeOption = option => {
    this.setState({ option: option });
  };

  /**
   * @memberof Input
   * @param {number} index
   */
  deleteTodo = index => {
    const tasksToDelete = this.state.todos.filter(
      (item, itemIndex) => itemIndex !== index
    );

    this.setState({ todos: tasksToDelete });
  };

  /**
   * @memberof Input
   * @param {number} index
   */
  enableEdit = index => {
    const todos = this.state.todos.map((currentTodo, itemIndex) => {
      if (itemIndex !== index) {
        return currentTodo;
      }

      return {
        ...currentTodo,
        isEditing: !currentTodo.isEditing
      };
    });

    this.setState({ todos });
  };
  /**
   * @memberof Input
   * @param {number} index
   * @param {string} task
   */
  updateTodo = (index, task) => {
    if (this.isTaskValid(task)) {
      const todos = this.state.todos.map((currentTodo, itemIndex) => {
        if (itemIndex !== index) {
          return currentTodo;
        }

        return {
          ...currentTodo,
          isEditing: !currentTodo.isEditing,
          todo: task
        };
      });

      this.setState({ todos });
    }
  };

  /**
   * @memberof Input
   * @param {string} task
   */
  isTaskValid = task => {
    if (task && task !== null && [...task].some(letter => letter !== ' ')) {
      return true;
    }

    return false;
  };

  /**
   * @memberof Input
   * @param {string} value
   */
  search = value => {
    this.setState({ searchParameter: value });
  };

  /**
   *
   *
   * @memberof App
   */
  componentDidMount() {
    const storedTodos = window.localStorage.getItem('storeTodos');
    const storedTodosArray = storedTodos ? JSON.parse(storedTodos) : [];

    this.setState({ todos: storedTodosArray });
  }

  /**
   *
   *
   * @memberof App
   */
  componentDidUpdate() {
    window.localStorage.setItem('storeTodos', JSON.stringify(this.state.todos));
  }

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <div className="wrapper">
        <TodoListWrapper
          onButtonClick={this.changeOption}
          activeOption={this.state.option}
          addTodo={this.addTodo}
          edit={false}
          todoList={this.state.todos}
          completeTodo={this.completeTodo}
          option={this.state.option}
          deleteTodo={this.deleteTodo}
          onEdit={this.enableEdit}
          updateTodo={this.updateTodo}
          onChange={this.search}
          searchParameter={this.state.searchParameter}
        />
      </div>
    );
  }
}

export default App;
