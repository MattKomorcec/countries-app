import React, { useEffect, useContext } from "react";
import { Table, Grid, Loader, Header, Container } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { CountryStoreContext } from "../../app/stores/countryStore";
import CountriesListHeader from "./CountriesListHeader";
import CountriesListBody from "./CountriesListBody";
import CountriesListFooter from "./CountriesListFooter";

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

  if (loading) {
    return <Loader active>Loading...</Loader>;
  }

  if (!renderedCountries) {
    return <p>Something went wrong. Please refresh</p>;
  }

  return (
    <Container>
      <Grid.Column width={16}>
        <Header
          as="h1"
          content="Click on the country to see details or filter by name or population"
        />
        <Table selectable sortable>
          <CountriesListHeader setActiveFilter={setActiveFilter} />
          <CountriesListBody countries={renderedCountries} />
          <CountriesListFooter
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Table>
      </Grid.Column>
    </Container>
  );
};

export default observer(CountriesList);
