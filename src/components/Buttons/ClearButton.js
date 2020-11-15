import React from 'react';
import * as S from './Buttons.style';

const ClearButton = ({setCurrentCard, setCards}) => {
	const clearCards = () => {
		setCards([]);
		setCurrentCard(0);
	}

	return (
		<S.ClearButton onClick={clearCards}>
			<i className="fas fa-trash"></i> Clear Cards
		</S.ClearButton>
	);
}

export default ClearButton;
