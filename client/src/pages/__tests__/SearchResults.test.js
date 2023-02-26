import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResults from "../SearchResults";
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

test("should go to SearchResult page without items", async () => {
  const FAKE_EVENT = { name: "Producto no encontrado" };
  const routes = [
    {
      path: "/items",
      element: <SearchResults />,
      loader: () => FAKE_EVENT,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/items?search=sdfsdfsdfsdfjksdnfkjsdkfjsdkfhksjdfhkskhj"],
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => screen.findAllByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent(FAKE_EVENT.name);
});

test("should go to SearchResult page with items result", async () => {
  const routes = [
    {
      path: "/items",
      element: <SearchResults />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/items?search=patineta"],
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => screen.findAllByTestId("item-result"));
  expect(screen.getAllByTestId("item-result")).toBeTruthy();
});
