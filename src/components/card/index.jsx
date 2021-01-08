import React from "react";
import styled, { css } from "styled-components";
import Button from "../button";

const CardWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px 20px;
  width: 300px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-weight: 600;
  }
  p {
    color: gray;
  }
  button {
    margin-left: 50px;
    width: 120px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    min-height: 100%;
    opacity: 0.9;
  }
`;
const ContentContainer = styled.div`
  align-self: flex-start;
  padding: 10px;
`;
const ContentBottomContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

function Card({ product }) {
  return (
    <CardWapper>
      <ImageContainer>
        <img src={product.image} alt="" />
      </ImageContainer>
      <ContentContainer>
        <h1>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h1>
        <p>{product.desc}</p>
        <ContentBottomContainer>
          <h3>₹{product.price}</h3>
          <Button>Add to cart</Button>
        </ContentBottomContainer>
      </ContentContainer>
    </CardWapper>
  );
}

export default Card;
