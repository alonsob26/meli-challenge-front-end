import { render, screen, cleanup } from "@testing-library/react";
import { Header } from "../index";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const component = screen.getByTestId("header");
  expect(component).toBeInTheDocument();
  const link = screen.getByTestId("meli-link");
  expect(link).toHaveAttribute("href", "https://www.mercadolibre.com/");
});
