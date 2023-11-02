import Styled from "styled-components";

export const PaginationContainer = Styled.div`
margin-top:30px ;


`;
export const PaginationList = Styled.ul`
    display: flex;
    justify-content:center;
    gap:7px;
    align-items:center;
    margin: 0;
    padding: 0;
    
    `;
export const PaginationItem = Styled.li`
border-radius: 5px ;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

list-style-type: none;
background-color: ${(props) => (props.active ? "#6F4A8E" : "#F4F4F4")};
cursor: pointer;
padding: 5px 10px;
`;

export const Anchor = Styled.a`
color: ${(props) => (props.active ? "#fff" : "#000")};
  font-size:1.15rem;

`;
