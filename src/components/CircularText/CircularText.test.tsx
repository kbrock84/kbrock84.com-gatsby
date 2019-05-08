import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import CircularText from "./CircularText";

describe("<CircularText />", () => {
  it("Matches the previous accepted snapshot.", () => {
    const { asFragment } = render(
      <CircularText r={100} text="render this in a circle" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  cleanup();

  it("Displays an array of divs with each char passed to the text prop", () => {
    const text = "render this in a circle";
    const { getByTestId } = render(<CircularText r={100} text={text} />);

    const letterDivs = getByTestId("test-letter-container").querySelectorAll(
      "div"
    );

    expect(letterDivs.length).toBe(text.length);
    letterDivs.forEach((div, i) => {
      expect(div.innerHTML).toBe(text[i]);
    });
  });

  it("displays the divs with a height if prop r + px", () => {
    const radius = 100;
    const { getByTestId } = render(
      <CircularText r={100} text="render this in a circle" />
    );

    const container = getByTestId("test-letter-container");
    container.childNodes.forEach(node => {
      const div = getComputedStyle(node as Element);
      expect(div.height).toBe(radius + "px");
    });
  });

  const expectAngleToBe = (degrees: number, getByTestId: any) => {
    const container = getByTestId("test-letter-container");
    container.childNodes.forEach((node: HTMLElement, i: number) => {
      const div = getComputedStyle(node as Element);
      const pattern = new RegExp(`.*rotate\\(${i * degrees * -1}deg\\).*`);
      const isRotated = pattern.test(div.transform as string);
      expect(isRotated).toBe(true);
    });
  };

  it("rotates the div counter-clockwise using the offset prop", () => {
    const { getByTestId } = render(
      <CircularText r={100} text="render this in a circle" offset={10} />
    );
    expectAngleToBe(10, getByTestId);
  });

  it("has default value of 2.5 for props.offset", () => {
    const { getByTestId } = render(
      <CircularText r={100} text="render this in a circle" />
    );
    expectAngleToBe(2.5, getByTestId);
  });
});
