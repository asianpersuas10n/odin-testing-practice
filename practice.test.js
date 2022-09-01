import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("first letter Capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("ignores non letters", () => {
  expect(capitalize("_ 4!string")).toBe("_ 4!String");
});

test("reversed string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("adds", () => {
  expect(calculator.add(10, 10)).toEqual(20);
});

test("subtracts", () => {
  expect(calculator.subtract(10, 10)).toEqual(0);
});

test("divide", () => {
  expect(calculator.divide(10, 10)).toEqual(1);
});

test("multiply", () => {
  expect(calculator.multiply(10, 10)).toEqual(100);
});

test("a to m", () => {
  expect(caesarCipher("a")).toBe("m");
});

test("test case", () => {
  expect(caesarCipher("A")).toBe("M");
});

test("z to l", () => {
  expect(caesarCipher("z")).toBe("l");
});

test("numbers and punctuation", () => {
  expect(caesarCipher("1.")).toBe("1.");
});

test("rot = 1", () => {
  expect(caesarCipher("a", 1)).toBe("a");
});

test("rot = -1", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});

test("analyze", () => {
  expect(analyzeArray([0, 1, 2, 3, 4, 5])).toEqual({
    average: 2.5,
    min: 0,
    max: 5,
    length: 6,
  });
});
