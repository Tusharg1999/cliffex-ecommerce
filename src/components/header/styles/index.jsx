import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
  background-color: transparent;
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Icon = styled.h1`
  font-weight: 400;
  color: black;
  font-family: "Times New Roman", Times, serif;
`;
const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  padding: 5px;
  img {
    height: 100%;
  }
`;

export { HeaderWrapper, Icon, CheckoutContainer, ImageContainer };
