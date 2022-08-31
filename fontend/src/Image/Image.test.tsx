/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import Image from "./Image";

describe("Image", () => {
  test("Renders Image component", () => {
    render(
      <Image
        src="https://3.imimg.com/data3/MP/OR/MY-9062850/basic-physics-for-class-xii-500x500.jpg"
        alt="Basic Physics"
      />
    );
  });

  test("Checking src and alt attributes", () => {
    render(
      <Image
        src="https://3.imimg.com/data3/MP/OR/MY-9062850/basic-physics-for-class-xii-500x500.jpg"
        alt="Basic Physics"
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Checking style attribute", () => {
    render(
      <Image
        src="https://3.imimg.com/data3/MP/OR/MY-9062850/basic-physics-for-class-xii-500x500.jpg"
        alt="Basic Physics"
        style={{ height: "44px", width: "122px" }}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("style", "height: 44px; width: 122px;");
  });
});
