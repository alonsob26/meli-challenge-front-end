import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../Dashboard";
import { getItems } from "../../services/items";

afterEach(() => {
  cleanup();
});

test("should render dashboard page", async () => {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
      loader: () => getItems,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 0,
  });

  render(<RouterProvider router={router} />);
  await waitFor(() => {
    const component = screen.getByTestId("dashboard");
    expect(component).toBeInTheDocument();
  });
});
