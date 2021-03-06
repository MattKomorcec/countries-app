import { observable, action, runInAction, computed } from "mobx";
import { ICountry } from "../models/country";
import { Countries } from "../api";
import { createContext } from "react";
import { sortAllCountries, SORTING_FILTER } from "../common/util";

export default class CountryStore {
  LIMIT = 10;

  @observable countries: ICountry[] = [];
  @observable countryRegistry: Map<string, ICountry> = new Map();
  @observable loading = false;
  @observable currentPage = 1;
  @observable activeFilter: "name" | "population" = SORTING_FILTER.name;

  @computed get totalPages() {
    return Math.ceil(this.countries.length / this.LIMIT);
  }

  @computed get renderedCountries(): ICountry[] | null {
    if (this.countries.length > 0) {
      const renderedCountries = [];

      for (
        let i = (this.currentPage - 1) * this.LIMIT;
        i < this.currentPage * this.LIMIT;
        i++
      ) {
        const country = this.countries[i];
        renderedCountries.push(country);
      }
      return renderedCountries;
    }
    return null;
  }

  @action loadCountries = async () => {
    const cachedCountries = window.localStorage.getItem("countries");

    if (!cachedCountries) {
      this.loading = true;
      try {
        const countries = await Countries.list();
        window.localStorage.setItem("countries", JSON.stringify(countries));

        runInAction("loading countries", () => {
          this.loading = false;
          countries.forEach((country: ICountry) => {
            this.countryRegistry.set(country.alpha3Code, country);
          });
          this.countries = sortAllCountries(countries, this.activeFilter);
        });
      } catch (error) {
        console.error("Problem loading countries", error);
        runInAction(() => {
          this.loading = false;
        });
      }
    } else {
      this.countries = sortAllCountries(
        JSON.parse(cachedCountries),
        this.activeFilter
      );
      this.countries.forEach((country: ICountry) => {
        this.countryRegistry.set(country.alpha3Code, country);
      });
    }
  };

  @action setActiveFilter = (filter: "name" | "population") => {
    this.activeFilter = filter;
    this.countries = sortAllCountries([...this.countries], filter);
  };

  @action setCurrentPage = (page: number) => {
    this.currentPage = page;
  };

  getCountry = (code: string) => {
    if (this.countryRegistry.has(code)) {
      return this.countryRegistry.get(code);
    }
    const cachedCountries = window.localStorage.getItem("countries");
    if (cachedCountries) {
      const allCountries = JSON.parse(cachedCountries);
      return allCountries.find(
        (country: ICountry) => country.alpha3Code === code
      );
    }
  };
}

export const CountryStoreContext = createContext(new CountryStore());
