import { createGlobalStyle } from 'styled-components';

export const appTheme = {
    appDark: '#06BA63',
    appLight: '#0FFF95',
    appBlack: '#00000',
    appWhite: '#fffff'
};

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        color: ${({ theme }) => theme.appBlack};
        background-color: ${({ theme }) => theme.appLight};
        scroll-behavior:smooth;
    }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
        font-family: 'Inter', sans-serif;
    }
`;
