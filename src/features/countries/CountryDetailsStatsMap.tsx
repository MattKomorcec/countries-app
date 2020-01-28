import React, { Fragment } from "react";
import { Header, Segment, Statistic } from "semantic-ui-react";
import { ICountry } from "../../app/models/country";
import Map from "../map/Map";

interface IProps {
  country: ICountry;
}

const CountryDetailsStatsMap: React.FC<IProps> = ({ country }) => {
  return (
    <Fragment>
      <Header
        as="h1"
        content={country.name}
        textAlign="center"
        image={country.flag}
        style={{ marginBottom: "50px" }}
      />
      <Segment>
        <Statistic.Group size="tiny" horizontal>
          <Statistic>
            <Statistic.Value>{country.nativeName}</Statistic.Value>
            <Statistic.Label>Native name</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.capital}</Statistic.Value>
            <Statistic.Label>Capital</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.alpha3Code}</Statistic.Value>
            <Statistic.Label>Alpha3Code</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {country.topLevelDomain.join(",")}
            </Statistic.Value>
            <Statistic.Label>Domain</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.area}</Statistic.Value>
            <Statistic.Label>Area</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.population}</Statistic.Value>
            <Statistic.Label>Population</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.latlng.join(", ")}</Statistic.Value>
            <Statistic.Label>Coordinates</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.region}</Statistic.Value>
            <Statistic.Label>Region</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.numericCode}</Statistic.Value>
            <Statistic.Label>Numeric code</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.callingCodes.join(", ")}</Statistic.Value>
            <Statistic.Label>Calling code(s)</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.timezones.join(", ")}</Statistic.Value>
            <Statistic.Label>Timezone(s)</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.demonym}</Statistic.Value>
            <Statistic.Label>Demonym</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{country.cioc || "None"}</Statistic.Value>
            <Statistic.Label>Olympic Code</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
      <Segment>
        <Map latLng={country.latlng} />
      </Segment>
    </Fragment>
  );
};

export default CountryDetailsStatsMap;
