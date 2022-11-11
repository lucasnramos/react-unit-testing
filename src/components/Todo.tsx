function Todo() {
  return (
    <div>
      <input type="checkbox" data-testid="toggle-todo" />
      <p>todo description</p>
      <button data-testid="delete-todo">Delete Todo</button>
    </div>
  );
}

export default Todo;
