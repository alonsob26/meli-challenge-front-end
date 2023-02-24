import { render, screen } from "@testing-library/react";
import App from "./App";
// esto es para que no de error en el test
import { HelmetProvider } from "react-helmet-async";
HelmetProvider.canUseDOM = false;

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
