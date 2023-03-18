import { render } from "@testing-library/react";
import App from "../App";

describe("App Components", () => {
  it("should render correct content", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("App");
  });
});
