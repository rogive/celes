import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Render header component", () => {
  it("shows component without crashing", () => {
    render(<Header />);
  });
});