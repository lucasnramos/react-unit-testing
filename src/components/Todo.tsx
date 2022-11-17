import { useState } from "react";

export interface TodoProps {
  completed: boolean;
  description: string;
}

const Todo: React.FC<TodoProps> = ({ completed, description }) => {
  const [checked, setChecked] = useState(completed)
  return (
    <div>
      <input type="checkbox" data-testid="toggle-todo" checked={checked} onChange={() => setChecked(!checked)} />
      <p>{description}</p>
      <button data-testid="delete-todo">Delete Todo</button>
    </div>
  );
};

export default Todo;
