import { render, screen, cleanup } from "@testing-library/react";
import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("should render Breadcrumbs", () => {
  const categories = [
    {
      id: "MLA5725",
      name: "Accesorios para Vehículos",
    },
    {
      id: "MLA1051",
      name: "Autopartes",
    },
  ];

  render(
    <BrowserRouter>
      <Breadcrumbs categories={categories} />
    </BrowserRouter>
  );
  const component = screen.getByTestId("breadcrumbs");
  expect(component).toBeInTheDocument();

  const category1 = screen.getByText("Accesorios para Vehículos");
  expect(category1).toBeInTheDocument();

  const category2 = screen.getByText("Autopartes");
  expect(category2).toBeInTheDocument();
});
