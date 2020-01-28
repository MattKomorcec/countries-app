import React, { useEffect, useContext } from "react";
import {
  Table,
  Image,
  Grid,
  Pagination,
  Loader,
  PaginationProps
} from "semantic-ui-react";
import { ICountry } from "../../app/models/country";
import { history } from "../../index";
import { observer } from "mobx-react-lite";
import { CountryStoreContext } from "../../app/stores/countryStore";

const CountriesList = () => {
  const countryStore = useContext(CountryStoreContext);
  const {
    loading,
    renderedCountries,
    loadCountries,
    totalPages,
    setActiveFilter,
    setCurrentPage,
    currentPage
  } = countryStore;

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    if (data.activePage) {
      const activePage = parseInt(`${data.activePage}`);
      setCurrentPage(activePage || 1);
    }
  };

  const handleRowClick = (country: ICountry) => {
    history.push(`/countries/${country.alpha3Code}`);
  };

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
            <Table.HeaderCell onClick={() => setActiveFilter("name")}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell>Capital</Table.HeaderCell>
            <Table.HeaderCell onClick={() => setActiveFilter("population")}>
              Population
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderedCountries &&
            renderedCountries.map((country: ICountry) => (
              <Table.Row
                key={country.name}
                onClick={() => handleRowClick(country)}
              >
                <Table.Cell>
                  <Image src={country.flag} size="mini" />
                </Table.Cell>
                <Table.Cell>{country.name}</Table.Cell>
                <Table.Cell>{country.capital}</Table.Cell>
                <Table.Cell>{country.population}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4" textAlign="center">
              <Pagination
                totalPages={totalPages}
                activePage={currentPage}
                onPageChange={handlePageChange}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Grid.Column>
  );
};

export default observer(CountriesList);
