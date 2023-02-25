import { render, screen } from "@testing-library/react";
import { BuyButton } from "../index";

test("should render buybutton", () => {
  render(<BuyButton />);
  const component = screen.getByTestId("buy-button");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("Comprar");
});
