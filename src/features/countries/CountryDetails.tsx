import React, { useContext, useEffect, useState } from "react";
import { Grid, Button, Divider, Container } from "semantic-ui-react";
import { RouteComponentProps, Link } from "react-router-dom";
import { CountryStoreContext } from "../../app/stores/countryStore";
import { ICountry } from "../../app/models/country";
import CountryDetailsStatsMap from "./CountryDetailsStatsMap";
import CountryBorders from "./CountryBorders";
import { MAIN_COLOR, WHITE } from "../../app/common/util";

interface ICountryDetailsParams {
  id: string;
}

const CountryDetails: React.FC<RouteComponentProps<ICountryDetailsParams>> = ({
  match
}) => {
  const [country, setCountry] = useState<ICountry | undefined>(undefined);
  const countryStore = useContext(CountryStoreContext);
  const { getCountry } = countryStore;

  useEffect(() => {
    setCountry(getCountry(match.params.id));
  }, [getCountry, match.params.id]);

  if (!country) {
    return (
      <Grid.Column width={16} textAlign="center">
        <Button
          as={Link}
          to="/countries"
          content="Back to all countries"
          style={{ backgroundColor: MAIN_COLOR, color: WHITE }}
          fluid
        />
      </Grid.Column>
    );
  }

  return (
    <Container>
      <Grid.Column width={16} style={{ paddingBottom: "50px" }}>
        <CountryDetailsStatsMap country={country} />
        <Divider />
        <CountryBorders borders={country.borders} getCountry={getCountry} />
        <Grid.Column width={16} textAlign="center">
          <Button
            as={Link}
            to="/countries"
            content="Back to all countries"
            style={{ backgroundColor: MAIN_COLOR, color: WHITE }}
            fluid
          />
        </Grid.Column>
      </Grid.Column>
    </Container>
  );
};

export default CountryDetails;
