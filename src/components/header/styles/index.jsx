import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 200px;
  background-color: transparent;
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media (max-width: 1000px) {
    padding: 30px 100px;
  }
  @media (max-width: 600px) {
    padding: 30px 50px;
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
  img {
    height: 100%;
  }
`;

export { HeaderWrapper, Icon, CheckoutContainer, ImageContainer };
