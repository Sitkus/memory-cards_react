import React from 'react';
import {Cards, Navigation, AddButton, ClearButton} from './components/';
import * as S from './App.style';
import './App.scss';

const App = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Header>
          <S.HeaderTitle>Memory Cards</S.HeaderTitle>
          <AddButton />
        </S.Header>
        <S.Section>
          <Cards />
          <Navigation />
        </S.Section>
        <S.Footer>
          <ClearButton />
        </S.Footer>
      </S.Container>
    </S.Main>
  );
}

export default App;
