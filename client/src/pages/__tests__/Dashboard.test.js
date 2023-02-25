import { render, screen, cleanup } from "@testing-library/react";
import { Dashboard } from "../index";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
HelmetProvider.canUseDOM = false;

afterEach(() => {
  cleanup();
});

test("should render Dashboard", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Dashboard />
    </MemoryRouter>
  );
  const component = screen.getByTestId("Dashboard");
  expect(component).toBeInTheDocument();
});
