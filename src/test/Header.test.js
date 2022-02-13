import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import Header from "../Header";

describe("Header tests", () => {
  test("Renders Emoji Search", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Emoji Search/i);
    expect(headerElement).toBeInTheDocument();
  });
});
