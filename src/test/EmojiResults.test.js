import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom";

describe("filterEmoji tests", () => {
  let emojis, input;
  beforeEach(() => {
    render(<App />);
    emojis = screen.getAllByTestId("emoji_row");
    input = screen.getByTestId("input");
  });

  test("Default Emoji lists size should be 20", () => {
    expect(emojis.length).toEqual(20);
  });

  test("Emoji list should lists for filter input", async () => {
    const emojiText = "laughing";
    userEvent.type(input, emojiText);
    let laughEmoji = screen.getByText(/Laughing/i);
    expect(laughEmoji).toBeInTheDocument();
  });

  test("Emoji must be copied when clicked", () => {
    userEvent.click(emojis[0].parentElement);
  });
});
