import { render, screen, cleanup } from "@testing-library/react";
import { ItemDetailDescription } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemDetailDescription", () => {
  const description = "Hola soy una descripción test";
  render(<ItemDetailDescription description={description} />);
  const component = screen.getByTestId("item-detail-description");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("Hola soy una descripción test");
});

test("el componente no tiene descripcion", () => {
  const description = undefined;
  render(<ItemDetailDescription description={description} />);
  const component = screen.getByTestId("item-detail-description");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("El producto no tiene descripción");
});
