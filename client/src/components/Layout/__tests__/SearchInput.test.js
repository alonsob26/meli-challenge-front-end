import { render, screen, cleanup } from "@testing-library/react";
import { SearchInput } from "../index";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render SearchInput", () => {
  render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>
  );
  const component = screen.getByTestId("searchInput");
  expect(component).toBeInTheDocument();
  const input = screen.getByTestId("searchInput-input");
  expect(input).toBeInTheDocument();
  const button = screen.getByTestId("searchInput-button");
  expect(button).toBeInTheDocument();
});
