import { cleanup, render, screen } from "@testing-library/react";
import Todo from "./Todo";

afterAll(cleanup);

describe("Showing todo", () => {
  test("Should render without errors", () => {
    const { baseElement } = render(<Todo />);
    expect(baseElement).toBeInTheDocument();
  });

  test("should show a checkbox to toggle todo", () => {
    render(<Todo />);
    expect(screen.getByTestId("toggle-todo")).toBeInTheDocument();
  });

  test("should show the todo's description", () => {
    render(<Todo />);
    expect(screen.getByText(/todo description/i)).toBeInTheDocument();
  });

  test("should have button to delete todo", () => {
    render(<Todo />);
    expect(screen.getByTestId("delete-todo")).toBeInTheDocument();
  });
});
