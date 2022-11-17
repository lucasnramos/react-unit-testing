import React from 'react'
import Todo, { TodoProps } from './Todo'

interface ListTodosProps {
  todos: TodoProps[]
}

const ListTodos: React.FC<ListTodosProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, idx) => (
        <Todo key={idx} {...todo} />
      ))}
    </div>
  )
}

export default ListTodos
