import React from 'react';

import Tool from './Tool';
import Input from './Input';

const TodoList = props => {
  const {
    todoList,
    option,
    completeTask,
    deleteTodo,
    onEdit,
    updateTodo,
    searchParameter
  } = props;

  const getList = () => {
    if (option === 'Remaining') {
      return todoList.filter(
        todo => !todo.isCompleted && todo.todo.includes(searchParameter)
      );
    } else if (option === 'Completed') {
      return todoList.filter(
        todo => todo.isCompleted && todo.todo.includes(searchParameter)
      );
    } else {
      return todoList.filter(todo => todo.todo.includes(searchParameter));
    }
  };

  return (
    <ul>
      {getList().map((item, index) => (
        <li className="clearfix" key={index}>
          {item.isEditing ? (
            <Input
              onEdit={updateTodo}
              edit={true}
              index={index}
              value={item.todo}
            />
          ) : (
            <div
              className={item.isCompleted ? 'task-list complete' : 'task-list'}
              onClick={() => completeTask(index)}
            >
              {item.todo}
            </div>
          )}
          <div className="menu">
            <Tool value="Edit" onClick={() => onEdit(index)} />
            <Tool value="Delete" onClick={() => deleteTodo(index)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
