"use strict";

const multiply = require("../challenge");

describe("multiply", () => {
  test("multiplies two positive numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("multiplies positive and negative numbers correctly", () => {
    expect(multiply(4, -2)).toBe(-8);
  });
});
