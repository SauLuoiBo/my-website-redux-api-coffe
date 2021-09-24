import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s linear;

  }

  *:focus {
  outline: 0;
  outline: none;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-main: ${(props) => props.theme.colors.main};
    --color-background1: ${(props) => props.theme.colors.background1};
    --color-background2: ${(props) => props.theme.colors.background2};
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-text: ${(props) => props.theme.colors.text};
    --color-white: ${(props) => props.theme.colors.whiteColor};
    --shadow: ${(props) => props.theme.colors.shadow};
    --border: .2rem solid var(--color-main);
    --border-hover: .2rem dashed var(--color-main);
    --border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
    --border-radius-hover: 4% 95% 6% 95%/95% 4% 92% 5%;

    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 60%;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 55%;
    }
  }


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${props => props.theme.colors.primary1};
    text-decoration: none;
    text-transform: capitalize;
    transition: all .2s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  a, button, img {
    cursor: pointer;
    color: var(--color-main);
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  h1 {
    font-size: 6.5rem;
    font-weight: 600;
  }


  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
  li{
    list-style: none;
  }
`;
