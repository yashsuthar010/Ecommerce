import Styled from "styled-components";

export const StyledFooter = Styled.footer`
    padding: 10px 50PX;
    max-width:100%;
    font-size:1.05rem;
    background: #F4F4F4;
    margin-top: 30px ;


     @media (max-width: 768px){
        grid-template-columns:repeat(1, 1fr);
        display: flex;
        justify-content:center;
        align-items:center:
    }

`;
