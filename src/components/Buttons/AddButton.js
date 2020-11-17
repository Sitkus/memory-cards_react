import React from 'react';
import * as S from './Buttons.style';

const AddButton = ({setAddSection}) => {
	const openModal = (e) => {
		setAddSection(true)

		e.preventDefault();
	}

	return (
		<S.AddButton onClick={openModal}>
			<i className="fas fa-plus"></i> Add New Card
		</S.AddButton>
	);
}

export default AddButton;
