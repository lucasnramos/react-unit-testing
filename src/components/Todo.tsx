import { useState } from "react";

export interface TodoProps {
  completed: boolean;
  description: string;
}

const Todo: React.FC<TodoProps> = ({ completed, description }) => {
  const [checked, setChecked] = useState(completed)
  const [deleted, setDeleted] = useState(false)

  if (deleted) {
    return null
  }
  return (
    <div className={deleted ? "hide" : ""}>
      <input type="checkbox" data-testid="toggle-todo" checked={checked} onChange={() => setChecked(!checked)} />
      <p>{description}</p>
      <button data-testid="delete-todo" onClick={() => setDeleted(true)}>Delete Todo</button>
    </div>
  );
};

export default Todo;
