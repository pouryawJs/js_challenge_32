"use strict";

const fs = require("fs");
const path = require("path");

// Get the path to the root directory
const rootPath = path.resolve(__dirname, ".."); // Assuming the code file is in the "tests" directory

// Update the path to the answers folder
const answersFolderPath = path.join(rootPath, "answers");

// Get the list of files in the answers folder
const userChallengeFiles = fs.readdirSync(answersFolderPath);

// Find the js_challenges.js file
const jsChallengesFilePath = path.join(answersFolderPath, "js_challenges.js");
const jsChallenges = require(jsChallengesFilePath);

// Loop through each user file and run the tests
userChallengeFiles.forEach((fileName) => {
  describe(`User Challenge - ${fileName}`, () => {
    if (fileName === "js_challenges.js") {
      const filePath = path.join(answersFolderPath, fileName);
      const userMultiply = require(filePath);

      // Add your test cases here
      test("multiplies two positive numbers correctly", () => {
        const expected = jsChallenges.multiply(2, 3); // Expected answer from js_challenges.js
        const actual = userMultiply(2, 3); // User's answer
        expect(actual).toBe(expected);
      });

      test("multiplies positive and negative numbers correctly", () => {
        const expected = jsChallenges.multiply(4, -2); // Expected answer from js_challenges.js
        const actual = userMultiply(4, -2); // User's answer
        expect(actual).toBe(expected);
      });

      return; // Skip further processing for js_challenges.js file
    }

    // Handle other user files if needed
  });
});
