import React from 'react';
import * as S from './Buttons.style';

const AddButton = ({setAddSection}) => {
	return (
		<S.AddButton onClick={() => setAddSection(true)}>
			<i className="fas fa-plus"></i> Add New Card
		</S.AddButton>
	);
}

export default AddButton;
