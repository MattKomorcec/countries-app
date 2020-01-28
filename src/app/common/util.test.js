import { sortAllCountries, SORTING_FILTER } from "./util";
import { testDataName, testDataPopulation } from "./testData";

describe("sortAllCountries", () => {
  it("returns an empty array when input is empty", () => {
    // Arrange
    const input = [];
    const expected = [];

    // Act
    const result = sortAllCountries(input, SORTING_FILTER.population);

    // Assert
    expect(expected).toEqual(result);
  });

  it("returns an array sorted by name in ascending order", () => {
    // Arrange
    const input = [...testDataName.unsorted];
    const expected = [...testDataName.sorted];

    // Act
    const result = sortAllCountries(input, SORTING_FILTER.name);

    // Assert
    expect(expected).toStrictEqual(result);
  });

  it("returns an array sorted by population in descending order", () => {
    // Arrange
    const input = [...testDataPopulation.unsorted];
    const expected = [...testDataPopulation.sorted];

    // Act
    const result = sortAllCountries(input, SORTING_FILTER.population);

    // Assert
    expect(expected).toStrictEqual(result);
  });
});
