import { render, screen, cleanup } from "@testing-library/react";
import { Layout } from "../index";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render Layout", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  const component = screen.getByTestId("layout");
  expect(component).toBeInTheDocument();
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});
