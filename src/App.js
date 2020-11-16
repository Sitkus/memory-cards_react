import React, {useState} from 'react';
import {Cards, Navigation, AddCard, AddButton, ClearButton} from './components/';
import * as S from './App.style';
import './App.scss';

const App = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [addSection, setAddSection] = useState(false);
  const [cards, setCards] = useState([
    {
      question: 'What is your name?',
      answer: 'Peter',
      flip: false
    },
    {
    	question: 'How do you do?',
    	answer: 'Great!',
    	flip: false
    },
    {
    	question: 'What is React?',
    	answer: 'A framework or library? That\'s the question...',
    	flip: false
    }
  ]);

  return (
    <S.Main>
      {
        !addSection ?
          <S.Container>
            <S.Header>
              <S.HeaderTitle>Memory Cards</S.HeaderTitle>
              <AddButton setAddSection={setAddSection} />
            </S.Header>
            <S.Section>
              {
                cards.length === 0 ?
                  <S.EmptyFiller></S.EmptyFiller> :
                  <Cards
                    currentCard={currentCard}
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
              <ClearButton
                setCurrentCard={setCurrentCard}
                setCards={setCards}
              />
            </S.Footer>
          </S.Container> :
          <AddCard 
            setCurrentCard={setCurrentCard}
            setAddSection={setAddSection}
            cards={cards}
            setCards={setCards}
          />
      }
    </S.Main>
  );
}

export default App;
