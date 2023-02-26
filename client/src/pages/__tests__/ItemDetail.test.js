import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemDetail from "../ItemDetail";
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

test("should go to ItemDetail page without item", async () => {
  const FAKE_EVENT = { name: "Producto no encontrado" };
  const routes = [
    {
      path: "/items/:id",
      element: <ItemDetail />,
      loader: () => FAKE_EVENT,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/items/123123123123"],
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => screen.findByTestId("not-found"));
  expect(screen.getByTestId("not-found")).toBeTruthy();
});

test("should go to ItemDetail page with item details", async () => {
  const routes = [
    {
      path: "/items/:id",
      element: <ItemDetail />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/items/MLA878621319"],
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => screen.findByTestId("item-detail-info"));
  expect(screen.getByTestId("item-detail-info")).toBeTruthy();
  await waitFor(() => screen.findByTestId("item-detail-description"));
  expect(screen.getByTestId("item-detail-description")).toBeTruthy();
  await waitFor(() => screen.findByTestId("item-detail-img"));
  expect(screen.getByTestId("item-detail-img")).toBeTruthy();
});
