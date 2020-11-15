import React from 'react';
import * as S from './Buttons.style';

const AddButton = () => {
	const openModal = () => {
		
	}

	return (
		<S.AddButton onClick={openModal}>
			<i className="fas fa-plus"></i> Add New Card
		</S.AddButton>
	);
}

export default AddButton;
