import React from 'react';
import * as S from './Buttons.style';

const ClearButton = () => {
	return (
		<S.ClearButton>
			<i className="fas fa-trash"></i> Clear Cards
		</S.ClearButton>
	);
}

export default ClearButton;
