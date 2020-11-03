import styled, { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  /** FONTS **************************
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Slab', serif;
  ***********************************/

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }


`;

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
