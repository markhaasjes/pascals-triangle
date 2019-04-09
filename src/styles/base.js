import { css } from 'styled-components';

const base = css`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    font-size: calc(1.55 * 1vw);

    @media screen and (min-width: 64em) {
      font-size: 1em;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background: #1d1e22;
  }

  #root {
    height: 100%;
  }
`;

export default base;
