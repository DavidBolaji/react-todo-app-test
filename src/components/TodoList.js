import React from 'react';

const TodoList: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <ul className="todo-list" role="list" aria-label="Todo items"></ul>
    </div>);

};

export default TodoList;