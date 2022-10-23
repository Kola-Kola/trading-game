import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should be App present in DOM", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
