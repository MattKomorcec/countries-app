import React from "react";
import { Table, Image } from "semantic-ui-react";
import { ICountry } from "../../app/models/country";
import { history } from "../../index";

interface IProps {
  countries: ICountry[];
}

const CountriesListBody: React.FC<IProps> = ({ countries }) => {
  const handleRowClick = (country: ICountry) => {
    history.push(`/countries/${country.alpha3Code}`);
  };

  return (
    <Table.Body>
      {countries &&
        countries.map((country: ICountry) => (
          <Table.Row key={country.name} onClick={() => handleRowClick(country)}>
            <Table.Cell>
              <Image src={country.flag} size="mini" />
            </Table.Cell>
            <Table.Cell>{country.name}</Table.Cell>
            <Table.Cell>{country.capital}</Table.Cell>
            <Table.Cell>{country.population}</Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>
  );
};

export default CountriesListBody;
