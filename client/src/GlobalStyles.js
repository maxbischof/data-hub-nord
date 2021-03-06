import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    --grey: #333;
    --lightgrey: #edf2f4;
    --red: #e63946;
    --cyan: #0F839C;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: var(--grey);
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  a {
      color: var(--grey);
      text-decoration: none;
  }

  a:visited {
      color: var(--grey);
  }
`
