import React from "react";
import { render } from "@testing-library/react";

import Body from "./Body";

describe("Render body section", () => {
  it("shows component without crashing", () => {
    render(<Body data={[]}/>);
  });
});