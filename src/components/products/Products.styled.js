import Styled from "styled-components";

export const Container = Styled.div`
padding: 0 50px;
`;

export const ProductsContainer = Styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Three equal-width columns */
    grid-gap: 20px;
    margin-top: 30px;

`;

export const CategoryButton = Styled.button`
  padding: 13px 21px;
  margin: 3px;
  cursor: pointer;
  font-size:1.15rem;
  font-weight:500;
  border:none;
  border-radius:7px;
  background-color: ${(props) => (props.active ? "#6F4A8E" : "#F4F4F4")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;
