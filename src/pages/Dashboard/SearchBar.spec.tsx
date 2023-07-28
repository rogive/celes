import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("Render Dashboard page", () => {
  it("shows component without crashing", () => {
    render(<Dashboard />);
  });
});