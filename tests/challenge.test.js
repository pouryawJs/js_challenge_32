"use strict";

const fs = require("fs");
const path = require("path");

// Define the path to the answers folder
const answersFolderPath = path.join(__dirname, "answers");

// Get the list of files in the answers folder
const userChallengeFiles = fs.readdirSync(answersFolderPath);

// Find the mehrshad.js file
const mehrshadFilePath = path.join(answersFolderPath, "mehrshad.js");
const mehrshad = require(mehrshadFilePath);

// Loop through each user file and run the tests
userChallengeFiles.forEach((fileName) => {
  describe(`User Challenge - ${fileName}`, () => {
    if (fileName !== "mehrshad.js") {
      const filePath = path.join(answersFolderPath, fileName);
      const userMultiply = require(filePath);

      // Add your test cases here
      test("multiplies two positive numbers correctly", () => {
        const expected = mehrshad.multiply(2, 3); // Expected answer from mehrshad.js
        const actual = userMultiply(2, 3); // User's answer
        expect(actual).toBe(expected);
      });

      test("multiplies positive and negative numbers correctly", () => {
        const expected = mehrshad.multiply(4, -2); // Expected answer from mehrshad.js
        const actual = userMultiply(4, -2); // User's answer
        expect(actual).toBe(expected);
      });
    }
  });
});
