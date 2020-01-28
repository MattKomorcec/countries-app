import axios, { AxiosResponse } from "axios";

export const Countries = {
  list: () =>
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res: AxiosResponse) => res.data)
};
