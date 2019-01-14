import React from 'react';

import Input from './Input';
import TodoList from './TodoList';
import Button from './Button';
import Search from './Search';

const TodoListWrapper = props => {
  const {
    onClick,
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
      <Button value="All" onClick={onClick} activeOption={activeOption} />
      <Button value="Remaining" onClick={onClick} activeOption={activeOption} />
      <Button value="Completed" onClick={onClick} activeOption={activeOption} />
      <Input onAdd={addTodo} edit={edit} />
      <Search onChange={onChange} />
      <TodoList
        todoList={todoList}
        completeTask={completeTodo}
        option={option}
        deleteTodo={deleteTodo}
        onEdit={onEdit}
        updateTodo={updateTodo}
        searchParameter={searchParameter}
      />
    </div>
  );
};

export default TodoListWrapper;
