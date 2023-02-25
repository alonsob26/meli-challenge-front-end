import { render, screen, cleanup } from "@testing-library/react";
import { ItemResult } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemResult", () => {
  const params = {
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_858858-MLA31000000000_072019-O.webp",
    title: "Producto test",
    seller: "Vendedor test",
    price: "1000",
    decimals: "00",
    shipping: true,
  };
  render(<ItemResult {...params} />);
  const component = screen.getByTestId("item-result");
  expect(component).toBeInTheDocument();
  const title = screen.getByText("Producto test");
  expect(title).toBeInTheDocument();
  const seller = screen.getByText("Vendedor test");
  expect(seller).toBeInTheDocument();
});
