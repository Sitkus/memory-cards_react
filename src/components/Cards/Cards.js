import React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as S from './Cards.style';

const Cards = ({currentCard, cards, setCards, cardChanges}) => {
	const flipCard = (index) => {
		cards[index].flip = !cards[index].flip;

		setCards([...cards]);
	}

	return (
		<>
			{
				cards.map((card, index) => (
					<CSSTransition
						in={card.flip}
						classNames="flip"
						timeout={300}
						key={index}
					>
						<CSSTransition
							in={cardChanges}
							classNames="next"
							timeout={400}
						>
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
						</CSSTransition>
					</CSSTransition>
				))
			}
		</>
	);
}

export default Cards;
