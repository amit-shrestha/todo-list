import React from 'react';

import '../assets/css/TodoList.css';
import Tool from './Tool';
import Input from './Input';

const TodoList = props => {
  const {
    todoList,
    option,
    completeTask,
    deleteTodo,
    onEdit,
    updateTodo
  } = props;
  let list = null;
  if (option === 'Remaining') {
    list = todoList.filter(todo => !todo.isCompleted);
  } else if (option === 'Completed') {
    list = todoList.filter(todo => todo.isCompleted);
  } else {
    list = [...todoList];
  }

  return (
    <ul>
      {list.map((item, index) => (
        <li className="clearfix" key={index}>
          {item.edit ? (
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
            <Tool value="Edit" action={onEdit} index={index} />
            <Tool value="Delete" action={deleteTodo} index={index} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
