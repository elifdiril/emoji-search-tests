import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("filterEmoji tests", () => {
  let buttons, input;
  beforeEach(() => {
    render(<App />);
    buttons = screen.getAllByTestId("emoji_row");
    //input = screen.getByTestId("input");
  });

  test("Default Emoji lists size should be 20", () => {
    expect(buttons.length).toEqual(20);
  });
});
