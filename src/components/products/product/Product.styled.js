import Styled from "styled-components";

export const StyledProduct = Styled.div`
    border-radius: 10px;
    padding: 7px;
    overflow: hidden;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex; 
    flex-direction: column; 

    
`;

export const StyledImg = Styled.img`
    height: 250px; 
    object-fit:contain;
    transition: all ease-out .3s; 
   &:hover {
    transform: scale(1.05);
  }
`;

export const ProductContext = Styled.div`
    padding-top:6px ;
    flex: 1; 
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    
`;

export const Text = Styled.h3`
    font-weight:500
`;
