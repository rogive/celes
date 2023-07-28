import React from "react";
import { render } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe("Render search bar component", () => {
  it("shows component without crashing", () => {
    render(<SearchBar/>);
  });
});