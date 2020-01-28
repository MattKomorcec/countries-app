import { ICountry } from "../models/country";

export const MAIN_COLOR = "#00A0D7";
export const WHITE = "#fff";

export type SortingFilter = { name: "name"; population: "population" };

export const SORTING_FILTER: SortingFilter = {
  name: "name",
  population: "population"
};

export const sortAllCountries = (
  countries: ICountry[],
  activeFilter: "name" | "population"
) => {
  return countries.sort((a: ICountry, b: ICountry) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (activeFilter === SORTING_FILTER.name) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    }

    return b.population - a.population;
  });
};
