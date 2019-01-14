import React from 'react';

import Input from './Input';
import TodoList from './TodoList';
import Button from './Button';
import '../assets/css/TodoListWrapper.css';

const TodoListWrapper = props => {
  const {
    onClick,
    activeOption,
    onAdd,
    edit,
    todoList,
    completeTask,
    option,
    deleteTodo,
    onEdit,
    updateTodo
  } = props;

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <Button value="All" onClick={onClick} activeOption={activeOption} />
      <Button value="Remaining" onClick={onClick} activeOption={activeOption} />
      <Button value="Completed" onClick={onClick} activeOption={activeOption} />
      <Input onAdd={onAdd} edit={edit} />
      <TodoList
        todoList={todoList}
        completeTask={completeTask}
        option={option}
        deleteTodo={deleteTodo}
        onEdit={onEdit}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoListWrapper;
