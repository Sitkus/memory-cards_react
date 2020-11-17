import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
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

  const modalAnimation = useSpring({
    config: {
      duration: 300
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 16, 16, 0.5)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    opacity: addSection ? 1 : 0,
    transform: addSection ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
    zIndex: 10
  });

  return (
    <>
      <S.Main>
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
        </S.Container>
      </S.Main>
      <animated.section style={modalAnimation}>
        <AddCard
          setCurrentCard={setCurrentCard}
          setAddSection={setAddSection}
          cards={cards}
          setCards={setCards}
        />
      </animated.section>
    </>
  );
}

export default App;
