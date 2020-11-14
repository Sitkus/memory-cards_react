import styled from 'styled-components';

const Button = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #f1f1f1;
  border-radius: 0.3rem;
  outline: none;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: 100ms transform ease-in;

  &:hover {
    background-color: #ffd710;
    border 1px solid #ffd710;
  }

  &:active {
    transition: 100ms transform ease-in;
    transform: translateY(0.2rem) scale(0.98);
  }
`;

const AddButton = styled(Button)`
  position: absolute;
  right: 0;
`;

const ClearButton = styled(Button)`

`;

export {AddButton, ClearButton};