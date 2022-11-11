import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterAll(cleanup);

describe("Adding todos", () => {
  test("should have an input for adding a new todo", () => {
    render(<App />);
    const inputElement = getAddTodoInput();
    expect(inputElement).toBeInTheDocument();
  });

  test("should have a button to add task", () => {
    render(<App />);
    const addButton = screen.getByTestId("add-todo");
    expect(addButton).toBeInTheDocument();
  });

  test("should have add todo button disabled if input is empty", () => {
    render(<App />);
    const addButton = getAddTodoButton();
    expect(addButton).toBeDisabled();
  });

  test("should enable button when input has value", async () => {
    render(<App />);
    const addButton = getAddTodoButton();
    const inputElement = getAddTodoInput();
    userEvent.type(inputElement, "Hello");
    await waitFor(() => expect(addButton).toBeEnabled());
  });
});

function getAddTodoInput() {
  return screen.getByTestId("todo-input");
}

function getAddTodoButton() {
  return screen.getByTestId("add-todo");
}
