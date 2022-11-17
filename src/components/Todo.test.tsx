import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo, { TodoProps } from "./Todo";

afterAll(cleanup);

const mockTodo: TodoProps = {
  completed: false,
  description: "todo description",
};

describe("Showing todo", () => {
  test("Should render without errors", () => {
    const { baseElement } = render(<Todo {...mockTodo} />);
    expect(baseElement).toBeInTheDocument();
  });

  test("should show a checkbox to toggle todo", () => {
    render(<Todo {...mockTodo} />);
    expect(getToggleTodo()).toBeInTheDocument();
  });

  test("should show the todo's description", () => {
    render(<Todo {...mockTodo} />);
    expect(getTodoDescription()).toBeInTheDocument();
  });

  test("should have button to delete todo", () => {
    render(<Todo {...mockTodo} />);
    expect(screen.getByTestId("delete-todo")).toBeInTheDocument();
  });

  test("should have input checked if task is completed", () => {
    const completedTodo = {
      completed: true,
      description: "completed todo",
    }
    render(<Todo {...completedTodo } />);
    expect(getToggleTodo()).toBeChecked()
  })

  test("should have input change checked property when clicking", async () => {
    render(<Todo {...mockTodo } />);
    userEvent.click(getToggleTodo())
    await waitFor(() => expect(getToggleTodo()).toBeChecked())
  })

  test("should toggle checkbox when clicking twice", async () => {
    render(<Todo {...mockTodo } />);
    userEvent.dblClick(getToggleTodo())
    await waitFor(() => expect(getToggleTodo()).not.toBeChecked())
  })
});

function getToggleTodo() {
  return screen.getByTestId("toggle-todo");
}

function getTodoDescription(description = /todo description/i) {
  return screen.getByText(description);
}
