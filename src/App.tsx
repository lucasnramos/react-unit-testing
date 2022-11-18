import { FormEvent, useRef, useState } from "react";
import "./App.css";
import ListTodos from "./components/ListTodos";
import { TodoProps } from "./components/Todo";

function App() {
  const [disable, setDisable] = useState<boolean>(true);
  const [todos, setTodos] = useState<TodoProps[]>([
    { description: "Hi", completed: false },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const onAddTodo = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTodos((todos) => [
      ...todos,
      { completed: false, description: inputRef.current!.value },
    ]);
    inputRef.current!.value = "";
    setDisable(true);
  };
  return (
    <div className="App">
      <form onSubmit={onAddTodo}>
        <input
          ref={inputRef}
          data-testid="todo-input"
          placeholder="add new todo"
          onChange={() => setDisable(false)}
        />
        <input
          type="submit"
          data-testid="add-todo"
          disabled={disable}
          value="Add Todo"
        />
      </form>

      <ListTodos todos={todos} />
    </div>
  );
}

export default App;
