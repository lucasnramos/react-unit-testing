import { cleanup, render, screen } from "@testing-library/react";
import ListTodos from "./ListTodos";
import { TodoProps } from "./Todo";

afterAll(cleanup);

const mockTodos: TodoProps[] = [
  {
    completed: false,
    title: "Hello!!!!",
  },
];

test("should show a list of pending todos", () => {
  render(<ListTodos todos={mockTodos} />);
  expect(getAllTodos()).toHaveLength(mockTodos.length);
});

function getAllTodos() {
  return screen.getAllByTestId("toggle-todo");
}
