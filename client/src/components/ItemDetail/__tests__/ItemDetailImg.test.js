import { render, screen, cleanup } from "@testing-library/react";
import { ItemDetailImg } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemDetailImg", () => {
  const params = {
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_2X_858000-MLA44200000000_062020-O.webp",
    title: "Producto test",
  };
  render(<ItemDetailImg {...params} />);
  const component = screen.getByTestId("item-detail-img");
  expect(component).toBeInTheDocument();
  expect(component).toHaveAttribute(
    "src",
    "https://http2.mlstatic.com/D_NQ_NP_2X_858000-MLA44200000000_062020-O.webp"
  );
  expect(component).toHaveAttribute("alt", "item_img");
});

test("should render ItemDetailImg with not found image if no have one from server", () => {
  const params = {
    picture: "",
    title: "Producto test",
  };
  render(<ItemDetailImg {...params} />);
  const component = screen.getByTestId("item-detail-img");
  expect(component).toBeInTheDocument();
  expect(component).toHaveAttribute("src", "404.png");
  expect(component).toHaveAttribute("alt", "item_img");
});
