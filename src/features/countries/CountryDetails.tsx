import React, { useContext, useEffect, useState } from "react";
import { Grid, Header, Card, Image } from "semantic-ui-react";
import { RouteComponentProps, Link } from "react-router-dom";
import { CountryStoreContext } from "../../app/stores/countryStore";
import { ICountry } from "../../app/models/country";

interface ICountryDetailsParams {
  id: string;
}

const CountryDetails: React.FC<RouteComponentProps<ICountryDetailsParams>> = ({
  match
}) => {
  const [country, setCountry] = useState<ICountry | undefined>(undefined);
  const countryStore = useContext(CountryStoreContext);
  const { loading, getCountry } = countryStore;

  useEffect(() => {
    setCountry(getCountry(match.params.id));
  }, [getCountry, match.params.id]);

  if (!country) {
    return <p>No country found!</p>;
  }

  return loading ? (
    <Grid.Column width={16}>
      <p>Loading country...</p>
    </Grid.Column>
  ) : (
    <Grid.Column width={16}>
      <Header
        as="h1"
        content={country.name}
        textAlign="center"
        image={country.flag}
        style={{ marginBottom: "50px" }}
      />
      <Card.Group itemsPerRow={1}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              {country.capital || "Unknown"} - capital city
            </Card.Header>
            <Card.Meta>In {country.subregion}</Card.Meta>
            <Card.Description>
              <ul>
                <li>Alpha2Code: {country.alpha2Code}</li>
                <li>Alpha3Code: {country.alpha3Code}</li>
                <li>Area: {country.area}</li>
                <li>Cioc: {country.cioc}</li>
                <li>Native name: {country.nativeName}</li>
                <li>Domain: {country.topLevelDomain.join(",")}</li>
                <li>Population: {country.population}</li>
                <li>Numeric code: {country.numericCode}</li>
                <li>Coordinates: {country.latlng.join(", ")}</li>
                <li>Calling code(s): {country.callingCodes.join(", ")}</li>
              </ul>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>Zimbabwe</Card.Header>
            <Card.Meta>In Europe</Card.Meta>
            <Card.Description>Zimbabwe is an amazing country</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Header as="h2" content="Bordering countries" />
      {country.borders.length === 0 ? (
        <p>{country.name} has no neighbours!</p>
      ) : (
        <Card.Group itemsPerRow={3}>
          {country.borders.map(key => {
            const ctry = getCountry(key);

            return (
              <Card
                key={ctry.alpha3Code}
                as={Link}
                to={`/countries/${ctry.alpha3Code}`}
                header={ctry.name}
              />
            );
          })}
        </Card.Group>
      )}
    </Grid.Column>
  );
};

export default CountryDetails;
