const {
  createTriangle,
  loopTheNumber,
  BMI,
  removeOddNumber,
  splitString,
} = require("./../../../../Day 4/exercise.js");

test("Create triangle", () => {
  expect(createTriangle(3)).toBe("01  \n02 03  \n04 05 06  \n");
});

test("Create loop", () => {
  expect(loopTheNumber(15)).toBe(
    "5, 10,  Fuzz | 3, 6, 9, 12,  Buzz | 15,  FuzzBuzz"
  );
});

test("BMI Calculator", () => {
  expect(BMI(54, 1.62)).toBe("Ideal");
});

test("Delete odd number with array as a parameter", () => {
  expect(removeOddNumber([1, 2, 3, 4])).toStrictEqual([2, 4]);
});

test("Split string become array", () => {
  expect(splitString("Hello World")).toStrictEqual(["Hello", "World"]);
});
