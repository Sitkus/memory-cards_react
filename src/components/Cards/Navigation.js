import React from 'react';
import * as S from './Navigation.style';

const leftArrow = {
	marginRight: '1.5rem',
	cursor: 'pointer'
};

const rightArrow = {
	marginLeft: '1.5rem',
	cursor: 'pointer'
};

const Navigation = ({cards, currentCard, setCurrentCard, cardChanges, setCardChanges}) => {
	const previousCard = () => {
		if (currentCard > 1) {
			currentCard--;

			setCardChanges(!cardChanges);
			setCurrentCard(currentCard);
		}
	}

	const nextCard = () => {
		if (currentCard < cards.length) {
			currentCard++;

			setCardChanges(!cardChanges);
			setCurrentCard(currentCard);
		}
	}

	return (
		<S.Nav>
			<i onClick={previousCard} className="fa fa-chevron-left" style={leftArrow}></i>
			<p>{`${currentCard} / ${cards.length}`}</p>
			<i onClick={nextCard} className="fa fa-chevron-right" style={rightArrow}></i>
		</S.Nav>
	);
}

export default Navigation;
