import styled from 'styled-components';

const Article = styled.article`
	width: 100%;
	height: 35rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
	border: 1px solid #f1f1f1;
	box-shadow: 0 0.4rem 1.5rem 0 #f1f1f1;
	cursor: pointer;
`;

const P = styled.p`
	padding: 5rem;
	text-align: center;
`;

export {Article, P};