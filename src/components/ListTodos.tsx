import React from "react";
import Todo, { ITodo } from "./Todo";

interface ListTodosProps {
  todos: ITodo[];
}

const ListTodos: React.FC<ListTodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, idx) => (
        <Todo key={idx} {...todo} />
      ))}
    </div>
  );
};

export default ListTodos;
