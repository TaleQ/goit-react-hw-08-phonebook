import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  html {
    -moz-tab-size: 4;
    tab-size: 4;
  }
  body {
    margin: 0;
    font-family: 'Roboto', 'Helvetica Neue', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:  #06347d;
    max-width: 100%;
    overflow-x: hidden;
    background-color: rgb(50 61 67);
    &.contacts-bg{
      background-color: rgb(0 4 13);
    }
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  button {
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    border-style: outset;
    color: inherit;
  }
  input {
    width: 70%;
    padding: 5px;
    outline: transparent;
    border: 1px solid #2160c4;
    border-radius: 4px;
    color: inherit
  }
  a {
    color:inherit;
    text-decoration: none;
    cursor: pointer;
  }
  p, h1, h2, h3 {
    margin: 0;
  }
`;

export default GlobalStyle;
