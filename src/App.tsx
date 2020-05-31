import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { observer } from 'mobx-react';

import Header from './components/Header';
import Filters from './components/Filters';
import Sort from './components/Sort';
import Tickets from './components/Tickets';
import { BACKGROUND } from './styles/const';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main>
        <Filters />
        <section>
          <Sort />
          <Tickets />
        </section>
      </Main>
    </Wrapper>
  );
}

export default observer(App);

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${BACKGROUND};
  font-family: Open Sans;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  display: grid;
  padding: 0 10%;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
`;