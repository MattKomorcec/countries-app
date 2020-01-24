import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Image,
  Grid,
  Pagination,
  Loader,
  PaginationProps
} from "semantic-ui-react";
import { AxiosResponse } from "axios";
import { ICountry } from "../../app/models/country";

declare global {
  interface Window {
    countries?: ICountry[];
  }
}

const LIMIT = 10;
let TOTAL_COUNTRIES = 0;
let TOTAL_PAGES = 0;

const CountriesList = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.countries) {
      setCountries(window.countries);
    } else {
      setLoading(true);
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res: AxiosResponse) => res.data)
        .then((res: ICountry[]) => {
          setCountries(res);
          window.countries = res;
          TOTAL_COUNTRIES = res.length;
          TOTAL_PAGES = Math.ceil(TOTAL_COUNTRIES / LIMIT);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    if (data.activePage) {
      const activePage = parseInt(`${data.activePage}`);
      setCurrentPage(activePage - 1 || 0);
    }
  };

  const renderedCountries = [];
  for (
    let index = currentPage * LIMIT;
    index < (currentPage + 1) * LIMIT;
    index++
  ) {
    renderedCountries.push(countries[index]);
  }

  return loading ? (
    <Grid.Column width={16}>
      <Loader content="Loading..." />
    </Grid.Column>
  ) : (
    <Grid.Column width={16}>
      <Table selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Capital</Table.HeaderCell>
            <Table.HeaderCell>Domain</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {countries.length !== 0 &&
            renderedCountries.map((country: any) => (
              <Table.Row key={country.name}>
                <Table.Cell>
                  <Image src={country.flag} size="mini" />
                </Table.Cell>
                <Table.Cell>{country.name}</Table.Cell>
                <Table.Cell>{country.capital}</Table.Cell>
                <Table.Cell>{country.topLevelDomain[0]}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4" textAlign="center">
              <Pagination
                totalPages={TOTAL_PAGES}
                defaultActivePage={1}
                onPageChange={handlePageChange}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Grid.Column>
  );
};

export default CountriesList;
