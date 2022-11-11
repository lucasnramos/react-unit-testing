import { useState } from "react";
import "./App.css";

function App() {
  const [disable, setDisable] = useState<boolean>(true);
  return (
    <div className="App">
      <input
        data-testid="todo-input"
        placeholder="add new todo"
        onChange={() => setDisable(false)}
      />
      <button data-testid="add-todo" disabled={disable}>
        Add Todo
      </button>
    </div>
  );
}

export default App;
