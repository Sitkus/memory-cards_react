import React, {useState} from 'react';
import * as S from './Cards.style';

const Cards = () => {
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
        <>
					{
						cards.map((card, index) => (
							<S.Article key={index}>
								{
									!card.flip ?
									<S.P>{card.question}</S.P> :
									<S.P>{card.answer}</S.P>
								}
							</S.Article>
						))
					}
        </>
    );
}

export default Cards;
