import React from 'react';

import '../assets/css/App.css';
import Input from './Input';
import DisplayTasks from './DisplayTasks';
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
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks.push({ task: task, completed: false });
    this.setState({
      todos: tasks
    });
  };

  completeTask = index => {
    let tasks = this.state.todos.map(item => {
      return { ...item };
    });
    tasks[index].completed = !this.state.todos[index].completed;
    this.setState({ todos: tasks });
  };

  changeOption = option => {
    this.setState({ option: option });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>TO-DO LIST</h1>
          <Button value="All" onClick={this.changeOption} />
          <Button value="Remaining" onClick={this.changeOption} />
          <Button value="Completed" onClick={this.changeOption} />
          <Input onAdd={this.addTask} />
          <DisplayTasks
            tasks={this.state.todos}
            onClick={this.completeTask}
            option={this.state.option}
          />
        </div>
      </div>
    );
  }
}

export default App;
