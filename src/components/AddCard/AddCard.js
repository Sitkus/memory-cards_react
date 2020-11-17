import React, {useState} from 'react';
import * as S from './AddCard.style';

const AddCard = ({setCurrentCard, setAddSection, cards, setCards}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const addCard = (e) => {
    const newCard = {
      question: question,
      answer: answer,
      flip: false
    };

    if (question && answer) {
      cards.push(newCard);
      setCards([...cards]);
      setCurrentCard(1);

      setAddSection(false);
    } else {
      setError(true);
    }

    e.preventDefault();
  }

  const closeModal = (e) => {
    setAddSection(false);

    e.preventDefault();
  }

  return (
    <S.Form>
      <S.ExitBtn name="exit" onClick={closeModal}><i class="fa fa-times"></i></S.ExitBtn>
      <S.Label htmlFor="question">Question:</S.Label>
      <S.Textarea 
        onChange={e => setQuestion(e.target.value)}
        id="question"
        name="question"
        placeholder="Insert your question..."
      ></S.Textarea>

      <S.Label htmlFor="answer">Answer:</S.Label>
      <S.Textarea 
        onChange={e => setAnswer(e.target.value)}
        id="answer"
        name="answer"
        placeholder="Insert your answer..."
      ></S.Textarea>
      {
        error ?
        <S.Error>Please fill in all fields</S.Error> :
        null
      }
      <S.SubmitBtn name="action" onClick={addCard}>Add it!</S.SubmitBtn>
    </S.Form>
  )
}

export default AddCard;
