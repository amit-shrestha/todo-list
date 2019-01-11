import React from 'react';

import '../assets/css/DisplayTasks.css';
import Tools from './Tools';

class DisplayTasks extends React.Component {
  returnList = (task, index) => (
    <li
      key={index}
      className={task.completed ? 'task-list complete' : 'task-list'}
      onClick={() => this.props.onClick(index)}
    >
      {task.task}
      <div className="menu">
        <Tools value="Edit" />
        <Tools value="Delete" />
      </div>
    </li>
  );

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          switch (this.props.option) {
            case 'All':
              return this.returnList(this.props.tasks[index], index);
            case 'Remaining':
              if (!task.completed)
                return this.returnList(this.props.tasks[index], index);
              break;
            case 'Completed':
              if (task.completed)
                return this.returnList(this.props.tasks[index], index);
              break;
            default:
              return this.returnList(this.props.tasks[index], index);
          }
        })}
      </ul>
    );
  }
}

export default DisplayTasks;
