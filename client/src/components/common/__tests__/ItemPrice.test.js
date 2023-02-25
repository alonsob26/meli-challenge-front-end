import { render, screen, cleanup } from "@testing-library/react";
import { ItemPrice } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemPrice", () => {
  const price = { decimals: 3, price: 1230, shipping: true };
  const styles = "item_detail_price";
  render(<ItemPrice props={price} styles={styles} />);
  const component = screen.getByTestId("item-price");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("1.230");
  expect(component).toHaveTextContent("$");
  expect(component).toHaveTextContent("30");
});

test("ItemPrice will show price in 0", () => {
  const price = { decimals: 0, price: 0, shipping: true };
  const styles = "item_detail_price";
  render(<ItemPrice props={price} styles={styles} />);
  const component = screen.getByTestId("item-price");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("0");
  expect(component).toHaveTextContent("$");
  expect(component).toHaveTextContent("00");
});
