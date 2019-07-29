import React from 'react';
import Proptypes from 'prop-types';

import Input from './Input';
import TodoList from './TodoList';
import Button from './Button';
import Search from './Search';

/**
 *
 * @param {*} props
 */
const TodoListWrapper = props => {
  const {
    onButtonClick,
    activeOption,
    addTodo,
    edit,
    todoList,
    completeTodo,
    option,
    deleteTodo,
    onEdit,
    updateTodo,
    onChange,
    searchParameter
  } = props;

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <Button
        value="All"
        onButtonClick={onButtonClick}
        activeOption={activeOption}
      />
      <Button
        value="Remaining"
        onButtonClick={onButtonClick}
        activeOption={activeOption}
      />
      <Button
        value="Completed"
        onButtonClick={onButtonClick}
        activeOption={activeOption}
      />
      <Input onAdd={addTodo} edit={edit} />
      <Search onChange={onChange} />
      <TodoList
        todoList={todoList}
        completeTodo={completeTodo}
        option={option}
        deleteTodo={deleteTodo}
        onEdit={onEdit}
        updateTodo={updateTodo}
        searchParameter={searchParameter}
      />
    </div>
  );
};

TodoListWrapper.propTypes = {
  onButtonClick: Proptypes.func,
  activeOption: Proptypes.string,
  addTodo: Proptypes.func,
  edit: Proptypes.bool,
  todoList: Proptypes.array,
  completeTodo: Proptypes.func,
  option: Proptypes.string,
  deleteTodo: Proptypes.func,
  onEdit: Proptypes.func,
  updateTodo: Proptypes.func,
  onChange: Proptypes.func,
  searchParameter: Proptypes.string
};

export default TodoListWrapper;
