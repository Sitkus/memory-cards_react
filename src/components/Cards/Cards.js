import React from 'react';
import * as S from './Cards.style';

const Cards = ({currentCard, cards, setCards}) => {
	const flipCard = (index) => {
		cards[index].flip = !cards[index].flip;

		setCards([...cards]);
	}

	return (
		<>
			{
				cards.map((card, index) => (
					<>
						{
							currentCard === index + 1 ?
							<S.Article
								key={index}
								onClick={() => flipCard(index)}
							>
								{
									!card.flip ?
										<S.P>{card.question}</S.P> :
										<S.P>{card.answer}</S.P>
								}
							</S.Article> :
							<S.FlippedArticle
								key={index}
								onClick={() => flipCard(index)}
							>
								{
									!card.flip ?
										<S.P>{card.question}</S.P> :
										<S.P>{card.answer}</S.P>
								}
							</S.FlippedArticle>
						}
					</>
				))
			}
		</>
	);
}

export default Cards;
