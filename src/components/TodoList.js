import React from 'react';
import Proptypes from 'prop-types';

import Tool from './Tool';
import Input from './Input';

/**
 *
 * @param {*} props
 */
const TodoList = props => {
  const {
    todoList,
    option,
    completeTodo,
    deleteTodo,
    onEdit,
    updateTodo,
    searchParameter
  } = props;

  /**
   *
   */
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

  return getList().length !== 0 ? (
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
            <div>
              <div
                className={
                  item.isCompleted ? 'task-list complete' : 'task-list'
                }
                onClick={() => completeTodo(index)}
              >
                {item.todo}
              </div>
              <div className="menu">
                <Tool value="Edit" onClick={() => onEdit(index)} />
                <Tool value="Delete" onClick={() => deleteTodo(index)} />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <div className="no-results">No Results Found</div>
  );
};

TodoList.propTypes = {
  todoList: Proptypes.array,
  option: Proptypes.string,
  completeTodo: Proptypes.func,
  deleteTodo: Proptypes.func,
  onEdit: Proptypes.func,
  updateTodo: Proptypes.func,
  searchParameter: Proptypes.string
};

export default TodoList;
