import { styled } from "styled-components";

export const Container = styled.div`
  padding: 0 50px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Three equal-width columns */
  grid-gap: 20px;
  margin-top: 30px;

  @media (min-width: 768px) and (max-width: 995px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryButton = styled.button`
  padding: 13px 18px;
  margin: 3px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: ${(props) => (props.active ? "#6F4A8E" : "#F4F4F4")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

export const CategoryAndFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;
