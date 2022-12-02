const {
  lhaWithSort,
  lhaWithoutSort,
  concateningWords,
  splitString,
  calculateArray,
  addElement,
  removeOddNumber,
  recrusiveLHMA,
  findIndex,
} = require("../../../../Day 5/exercise.js");

test("Sorting list with method sort", () => {
  expect(lhaWithSort([10, 2, 3, 4, 1])).toStrictEqual([1, 10, 4]);
});

test("Sorting list without method sort", () => {
  expect(lhaWithoutSort([30, 7, 4, 10, 2, 3, 11, 20])).toStrictEqual([
    2, 30, 10.875,
  ]);
});

test("Concat array to become words", () => {
  expect(
    concateningWords(["Banana", "Watermelon", "Melon", "Cherry", "Durian"])
  ).toBe("Banana, Watermelon, Melon, Cherry and Durian. ");
});

test("Split string become array", () => {
  expect(splitString("Hello World")).toStrictEqual(["Hello", "World"]);
});

test("calculate two array", () => {
  expect(calculateArray([1, 2, 3], [3, 2, 1])).toStrictEqual([4, 4, 4]);
});

test("Add element to the last index of array if element is not exist", () => {
  expect(addElement([1, 2, 3], 5)).toStrictEqual([1, 2, 3, 5]);
});

test("Delete odd number with array as a parameter", () => {
  expect(removeOddNumber([1, 2, 3, 4])).toStrictEqual([2, 4]);
});

test("Recrusif function to get lowest highest median average", () => {
  expect(recrusiveLHMA([30, 7, 4, 10, 2, 3, 11, 20], [], 0)).toStrictEqual([
    2, 30, 10, 10.875,
  ]);
});
