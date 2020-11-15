import styled from 'styled-components';

const Article = styled.article`
	position: article;
	width: 100%;
	height: 35rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
	border: 1px solid #f1f1f1;
	box-shadow: 0 0.4rem 1.5rem 0 #f1f1f1;
	cursor: pointer;
	z-index: 2;
	opacity: 1;
	transition: 300ms all ease-in-out;
`;

const FlippedArticle = styled(Article)`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	opacity: 0;
	transition: 300ms all ease-in-out;
`;

const P = styled.p`
	padding: 5rem;
	text-align: center;
`;

export {Article, FlippedArticle, P};