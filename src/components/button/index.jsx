import styled,{css} from "styled-components";

const Button = styled.button`
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.primary};
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: transform .2s ease-in-out;
    &:active:hover {
      transform: scale(0.9);
    }
  `}
`;

export default Button