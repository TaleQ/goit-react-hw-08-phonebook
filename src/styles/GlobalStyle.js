import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
}
  body {
    margin: 0;
    font-family: 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale;
    background-color: #acc2e6 !important;
    color:  #06347d;
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
`;

export default GlobalStyle;
