import React from 'react';
import * as S from './Cards.style';

const Cards = ({cards, setCards}) => {
	const flipCard = (index) => {
		cards[index].flip = !cards[index].flip;

		setCards([...cards]);
	}

	return (
		<>
			{
				cards.map((card, index) => (
					<S.Article 
						key={index}
						onClick={() => flipCard(index)}
					>
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
