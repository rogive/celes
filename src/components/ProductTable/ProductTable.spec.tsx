import React from "react";
import { render } from "@testing-library/react";

import ProductTable from "./ProductTable";

describe("Render product table component", () => {
  it("shows component without crashing", () => {
    render(<ProductTable data={[]} />);
  });
});