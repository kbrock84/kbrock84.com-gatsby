import React from "react";
import {
  render,
  cleanup,
  queryAllByLabelText,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";

import CircularText from "./CircularText.js";
describe("<CircularText />", () => {
  it("Matches the previous accepted snapshot.", () => {
    const { asFragment } = render(
      <CircularText r="100" text="render this in a circle" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  cleanup();

  it("Displays an array of divs with each char passed to the text prop", () => {
    const text = "render this in a circle";
    const { getByTestId } = render(
      <CircularText r="100" text="render this in a circle" />
    );

    const letterDivs = getByTestId("test-letter-container").querySelectorAll(
      "div"
    );

    expect(letterDivs.length).toBe(text.length);
    letterDivs.forEach((div, i) => {
      expect(div.innerHTML).toBe(text[i]);
    });
  });

  it("displays the divs with a height if prop r + px", () => {
    const text = "render this in a circle";
    const radius = 100;
    const { getByTestId, debug } = render(
      <CircularText r="100" text="render this in a circle" />
    );

    const container = getByTestId("test-letter-container");
    container.childNodes.forEach((node, i) => {
      const div = getComputedStyle(node);
      expect(div.height).toBe(radius + "px");
    });
  });

  it("rotates the div counter-clockwise using the offset prop", () => {
    const text = "render this in a circle";
    const radius = 100;
    const { getByTestId, debug } = render(
      <CircularText r="100" text="render this in a circle" offset="10" />
    );

    const container = getByTestId("test-letter-container");
    container.childNodes.forEach((node, i) => {
      const div = getComputedStyle(node);
      const pattern = new RegExp(`.*rotate\\(${i * 10 * -1}deg\\).*`);
      const isRotated = pattern.test(div.transform);
      expect(isRotated).toBe(true);
    });
  });
});
