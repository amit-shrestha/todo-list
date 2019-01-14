import React from 'react';

import '../assets/css/App.css';
import TodoListWrapper from './TodoListWrapper';

class App extends React.Component {
  constructor() {
    super();
    const ALL = 'All';
    this.state = {
      todos: [],
      searchParameter: '',
      option: ALL
    };
  }

  addTodo = task => {
    if (this.isTaskValid(task)) {
      this.setState({
        todos: [
          { todo: task, isCompleted: false, isEditing: false },
          ...this.state.todos
        ]
      });
    }
  };

  completeTodo = index => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].isCompleted = !this.state.todos[index].isCompleted;
    this.setState({ todos: tasks });
  };

  changeOption = option => {
    this.setState({ option: option });
  };

  deleteTodo = index => {
    let tasksToDelete = this.state.todos.filter(
      (item, itemIndex) => itemIndex !== index
    );
    this.setState({ todos: tasksToDelete });
  };

  enableEdit = index => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].isEditing = !this.state.todos[index].isEditing;
    this.setState({ todos: tasks });
  };

  updateTodo = (index, task) => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].isEditing = !this.state.todos[index].isEditing;
    if (this.isTaskValid(task)) {
      tasks[index].todo = task;
    }
    this.setState({ todos: tasks });
  };

  isTaskValid = task => {
    if (task && task !== null && [...task].some(letter => letter !== ' ')) {
      return true;
    }

    return false;
  };

  search = value => {
    this.setState({ searchParameter: value });
  };

  render() {
    return (
      <div className="wrapper">
        <TodoListWrapper
          onClick={this.changeOption}
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
