import styled from "styled-components";

const ProductWrapper = styled.div`
  flex: 1;
  padding: 10px 0 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  column-gap: 50px;
  row-gap: 50px;
  align-content: center;
  @media (max-width: 1000px) {
    text-align: center;
    padding: 0;
    margin-top: 20px;
  }
`;

export {ProductWrapper}