import { render, screen, cleanup } from "@testing-library/react";
import { ItemDetailInfo } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemDetailInfo", () => {
  const params = {
    title: "Producto test",
    price_info: {
      currency: "ARS",
      amount: 1000,
      decimals: 0,
    },
    condition: "new",
    sold_quantity: 10,
  };
  render(<ItemDetailInfo {...params} />);
  const component = screen.getByTestId("item-detail-info");
  expect(component).toBeInTheDocument();
  const title = screen.getByText("Producto test");
  expect(title).toBeInTheDocument();
  const soldQuantity = screen.getByText("Nuevo - 10 vendidos");
  expect(soldQuantity).toBeInTheDocument();
});
