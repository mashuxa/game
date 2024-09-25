import { joinLettersMaps, mapLettersInWord, sortStringByAscending } from "./utils";

describe("Utility Functions", () => {
  test("sortStringByAscending sorts by string length", () => {
    expect(sortStringByAscending("a", "b")).toBe(0);
    expect(sortStringByAscending("b", "a")).toBe(0);
    expect(sortStringByAscending("bbb", "a")).toBeGreaterThan(0);
    expect(sortStringByAscending("aaa", "b")).toBeGreaterThan(0);
    expect(sortStringByAscending("a", "bbb")).toBeLessThan(0);
    expect(sortStringByAscending("b", "aaa")).toBeLessThan(0);
  });

  test("mapLettersInWord counts letter occurrences", () => {
    const result = mapLettersInWord("test");

    expect(result.get("t")).toBe(2);
    expect(result.get("e")).toBe(1);
    expect(result.get("s")).toBe(1);
    expect(result.size).toBe(3);
  });

  test("joinLettersMaps combines letter counts correctly", () => {
    const entries = Object.entries({ t: 1, e: 3, x: 10 });
    const result = joinLettersMaps(new Map(entries), "test");

    expect(result.get("t")).toBe(2);
    expect(result.get("e")).toBe(3);
    expect(result.get("x")).toBe(10);
    expect(result.get("s")).toBe(1);
  });
});
