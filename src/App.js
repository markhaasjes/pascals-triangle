import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

import base from './styles/base';

import Triangle from './components/Triangle';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  ${base}
`;

export default function App() {
  return (
    <Main>
      <GlobalStyle />
      <Triangle />
    </Main>
  );
}
