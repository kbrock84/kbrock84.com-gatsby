import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import CircularText from "./CircularText.js";

it("renders", () => {
  const { asFragment } = render(
    <CircularText r="100" text="render this in a circle" />
  );
  expect(asFragment()).toMatchSnapshot();
});
