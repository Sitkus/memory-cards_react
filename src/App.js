import React, {useState} from 'react';
import {Cards, Navigation, AddButton, ClearButton} from './components/';
import * as S from './App.style';
import './App.scss';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCards] = useState([
    {
      question: 'What is your name?',
      answer: 'Peter',
      flip: false
    },
    // {
    // 	question: 'How do you do?',
    // 	answer: 'Great!',
    // 	flip: true
    // },
    // {
    // 	question: 'What is React?',
    // 	answer: 'A framework or library? That\'s the question...',
    // 	flip: false
    // }
  ]);

  return (
    <S.Main>
      <S.Container>
        <S.Header>
          <S.HeaderTitle>Memory Cards</S.HeaderTitle>
          <AddButton />
        </S.Header>
        <S.Section>
          {
            cards.length === 0 ?
            <S.EmptyFiller></S.EmptyFiller> :
            <Cards
              cards={cards}
              setCards={setCards}
            />
          }
          <Navigation
            cards={cards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        </S.Section>
        <S.Footer>
          <ClearButton setCards={setCards} />
        </S.Footer>
      </S.Container>
    </S.Main>
  );
}

export default App;
