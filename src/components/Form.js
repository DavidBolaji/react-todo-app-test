'use client';

import React from 'react';

interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

interface FormProps {
  inputText: string;
  setInputText: (text: string) => void;
  todos: Todo[];
  setTodo: (todos: Todo[]) => void;
}

const Form: React.FC<FormProps> = ({ inputText, setInputText, todos, setTodo }) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setTodo([
    ...todos,
    { text: inputText, completed: false, id: Math.random() * 100 }]
    );
    setInputText("");
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
        aria-label="Enter todo text" />


      <button
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit"
        aria-label="Add todo">

        <i className="fas fa-plus-square"></i>
      </button>
      <div className="absolute top-0 right-0 p-4 cursor-pointer">
        <select
          name="todos"
          className="p-4"
          aria-label="Filter todos">

          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>);

};

export default Form;