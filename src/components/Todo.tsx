export interface TodoProps {
  completed: boolean;
  description: string;
}

const Todo: React.FC<TodoProps> = ({ description, completed }) => {
  return (
    <div>
      <input type="checkbox" data-testid="toggle-todo" checked={completed} />
      <p>{description}</p>
      <button data-testid="delete-todo">Delete Todo</button>
    </div>
  );
};

export default Todo;
