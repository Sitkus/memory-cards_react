import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70rem;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.h1`
  font-weight: 500;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyFiller = styled.div`
  width: 100%;
	height: 35rem;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 5rem;
  left: 5rem;
`;

export {Main, Container, Header, HeaderTitle, Section, EmptyFiller, Footer};