import React from "react";
import {
  StyledImg,
  ProductContext,
  StyledProduct,
  Text,
} from "./Product.styled";

const Product = (props) => {
  return (
    <>
      <StyledProduct>
        <StyledImg src={props.images[0]} alt="image" />
        <ProductContext>
          <div>
            <Text style={{ margin: 0 }}>{props.title}</Text>
            <p style={{ margin: "0 0 4px 0" }}>{props.description}</p>
          </div>
          <Text style={{ margin: 0 }}>{`$${props.price}`}</Text>
        </ProductContext>
      </StyledProduct>
    </>
  );
};

export default Product;
