import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../Dashboard";
import { HelmetProvider } from "react-helmet-async";

HelmetProvider.canUseDOM = false;

/**
 * Mock helmet module
 */

jest.mock("react-helmet-async", () => ({
  Helmet: () => jest.fn(),
  HelmetProvider: () => jest.fn(),
}));

afterEach(() => {
  cleanup();
});

//this test not need msw because the loader is a fake function
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
  await waitFor(() => screen.findAllByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent(FAKE_EVENT.name);
});

//this test works because the loader is a fake function and not need msw
test("should go to Dashboard page with items result", async () => {
  const FAKE_EVENT = {
    status: 200,
    data: {
      author: { name: "Alonso", lastname: "Burgos" },
      categories: [{ id: "MLA90337", name: "Patinetas" }],
      items: [
        {
          id: "MLA878621319",
          title: "Skate Patineta Trucks De Aluminio Maple 80 X 20 Cm ",
          price: { currency: "ARS", amount: 8739, decimals: 0 },
          picture:
            "http://http2.mlstatic.com/D_873884-MLA50042239374_052022-O.jpg",
          condition: "new",
          free_shipping: true,
          location: "Capital Federal",
        },
      ],
    },
  };
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
  const component = await waitFor(() => screen.findByTestId("item-result"));
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent(
    "$ 8.73900Skate Patineta Trucks De Aluminio Maple 80 X 20 Cm Capital Federal"
  );
});
