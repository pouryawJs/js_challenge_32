const fs = require("fs");
const path = require("path");
const multiply = require("../js_challenges");

describe("Multiplication function", () => {
  // Get the list of JavaScript files in the answers folder
  const answersFolder = path.join(__dirname, "../answers");

  // Define the test cases
  const testCases = [
    [1, 2],
    [3, 9],
    [-2, 4],
  ];

  // Iterate over each JavaScript file and run the tests
  fs.readdirSync(answersFolder).forEach((file) => {
    if (file.endsWith(".js")) {
      const answer = require(path.join(answersFolder, file));

      testCases.forEach((inputs, index) => {
        test(`Test case ${index + 1} in ${file}`, () => {
          expect(answer(...inputs)).toEqual(multiply(...inputs));
        });
      });
    }
  });
});
