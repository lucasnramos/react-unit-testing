import { useState } from "react";

export interface TodoProps {
  completed: boolean;
  description: string;
}

const Todo: React.FC<TodoProps> = ({ description, completed }) => {
  const [checked, setChecked] = useState(completed)
  return (
    <div>
      <input type="checkbox" data-testid="toggle-todo" checked={checked} onChange={() => setChecked(!completed)} />
      <p>{description}</p>
      <button data-testid="delete-todo">Delete Todo</button>
    </div>
  );
};

export default Todo;
