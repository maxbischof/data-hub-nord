import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html {
  box-sizing: border-box;
  height: 100%;
}

body {
  margin: 0;
  color: #333;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
`