import React, { Fragment } from "react";
import { Header, Card, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ICountry } from "../../app/models/country";

interface IProps {
  borders: string[];
  getCountry: (code: string) => ICountry;
}

const CountryBorders: React.FC<IProps> = ({ borders, getCountry }) => {
  if (borders.length === 0) {
    return null;
  }
  return (
    <Fragment>
      <Header as="h2" content="Bordering countries" />
      <Card.Group itemsPerRow={3}>
        {borders.map(key => {
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
      <Divider />
    </Fragment>
  );
};

export default CountryBorders;
