import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html {
  box-sizing: border-box;
  --grey: #333;
}

body {
  margin: 0;
  color: var(--grey);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

a:visited {
    color: var(--grey);
}
`