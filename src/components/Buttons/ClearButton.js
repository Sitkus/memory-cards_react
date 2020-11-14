import React from 'react';
import * as S from './Buttons.style';

const ClearButton = ({setCards}) => {
	const clearCards = () => {
		setCards([]);
	}

	return (
		<S.ClearButton onClick={clearCards}>
			<i className="fas fa-trash"></i> Clear Cards
		</S.ClearButton>
	);
}

export default ClearButton;
