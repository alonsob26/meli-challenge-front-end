import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./pages/Dashboard";
import { HelmetProvider } from "react-helmet-async";

HelmetProvider.canUseDOM = false;

/**
 * Mock helmet module to avoid error
 */

jest.mock("react-helmet-async", () => ({
  Helmet: () => jest.fn(),
  HelmetProvider: () => jest.fn(),
}));

afterEach(() => {
  cleanup();
});

//this test not need msw because the loader is a fake function
//will render dashboard initialy
test("should go to Dashboard page without items", async () => {
  const FAKE_EVENT = { name: "Producto no encontrado" };
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
      loader: () => FAKE_EVENT,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => screen.findByTestId("not-found"));
  expect(screen.getByTestId("not-found")).toBeTruthy();
});
