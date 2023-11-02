import React from "react";
import {
  PaginationContainer,
  PaginationList,
  PaginationItem,
  Anchor,
} from "./Pagination.Styled";
import "../../index.css";

const Pagination = ({ nPage, currentPage, setCurrentPage }) => {
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <PaginationContainer>
        <PaginationList>
          <PaginationItem onClick={prevPage}>
            <Anchor href="#">Previous</Anchor>
          </PaginationItem>
          {numbers.map((pgNumber) => (
            <PaginationItem
              key={pgNumber}
              active={currentPage == pgNumber}
              onClick={() => setCurrentPage(pgNumber)}
            >
              <Anchor href="#" active={currentPage == pgNumber}>
                {pgNumber}
              </Anchor>
            </PaginationItem>
          ))}
          <PaginationItem onClick={nextPage}>
            <Anchor href="#">Next</Anchor>
          </PaginationItem>
        </PaginationList>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
