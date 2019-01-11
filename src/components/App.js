import React from 'react';

import '../assets/css/App.css';
import Input from './Input';
import TodoList from './TodoList';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      option: 'All'
    };
  }

  addTask = task => {
    if (task) {
      this.setState({
        todos: [
          { todo: task, isCompleted: false, edit: false },
          ...this.state.todos
        ]
      });
    }
  };

  completeTask = index => {
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
      item => this.state.todos.indexOf(item) !== index
    );
    this.setState({ todos: tasksToDelete });
  };

  editTodo = index => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].edit = !this.state.todos[index].edit;
    this.setState({ todos: tasks });
  };

  updateTodo = (index, task) => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].edit = !this.state.todos[index].edit;
    tasks[index].todo = task;
    this.setState({ todos: tasks });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>TO-DO LIST</h1>
          <Button value="All" onClick={this.changeOption} />
          <Button value="Remaining" onClick={this.changeOption} />
          <Button value="Completed" onClick={this.changeOption} />
          <Input onAdd={this.addTask} edit={false} />
          <TodoList
            todoList={this.state.todos}
            completeTask={this.completeTask}
            option={this.state.option}
            deleteTodo={this.deleteTodo}
            onEdit={this.editTodo}
            updateTodo={this.updateTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
