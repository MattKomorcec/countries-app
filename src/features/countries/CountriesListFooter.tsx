import React from "react";
import { Table, Pagination, PaginationProps } from "semantic-ui-react";

interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const CountriesListFooter: React.FC<IProps> = ({
  totalPages,
  currentPage,
  setCurrentPage
}) => {
  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    if (data.activePage) {
      const activePage = parseInt(`${data.activePage}`);
      setCurrentPage(activePage);
    }
  };

  return (
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
  );
};

export default CountriesListFooter;
