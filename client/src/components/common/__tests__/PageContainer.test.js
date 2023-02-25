import { render, screen, cleanup } from "@testing-library/react";
import { PageContainer } from "../index";

afterEach(() => {
  cleanup();
});

test("should render PageContainer", () => {
  render(<PageContainer />);
  const component = screen.getByTestId("page-container");
  expect(component).toBeInTheDocument();
});
