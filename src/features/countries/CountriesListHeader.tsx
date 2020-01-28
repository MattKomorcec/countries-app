import React from "react";
import { Table } from "semantic-ui-react";
import { SORTING_FILTER } from "../../app/common/util";

interface IProps {
  setActiveFilter: (filter: "name" | "population") => void;
}

const CountriesListHeader: React.FC<IProps> = ({ setActiveFilter }) => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Flag</Table.HeaderCell>
        <Table.HeaderCell onClick={() => setActiveFilter(SORTING_FILTER.name)}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell>Capital</Table.HeaderCell>
        <Table.HeaderCell
          onClick={() => setActiveFilter(SORTING_FILTER.population)}
        >
          Population
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default CountriesListHeader;
