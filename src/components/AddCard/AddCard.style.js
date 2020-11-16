import styled from 'styled-components';

const Form = styled.form`
  width: 65rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: #f9f9f9;
  box-shadow: 0 0.4rem 1.5rem 0 #f1f1f1;
  padding: 5rem;
`;

const ExitBtn = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  border: none;
  background-color: inherit;
  font-size: 1.8rem;
  cursor: pointer;
`;

const Label = styled.label`
  flex: 0 0 100%;
  margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  flex: 0 0 100%;
  height: 7rem;
  resize: vertical;
  border: 1px solid #ccc;
  outline: none;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;

  &:focus {
    border: 1px solid #161616;
  }
`;

const Error = styled.small`
  display: block;
  flex: 0 0 100%;
  color: red;
  margin-bottom: 2rem;
`;

const SubmitBtn = styled.button`
  background-color: #161616;
  border: 1px solid #161616;
  border-radius: 0.3rem;
  outline: none;
  color: #ffd710;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: 100ms transform ease-in;

  &:hover {
    background-color: #ffd710;
    color: #161616;
    border 1px solid #ffd710;
  }

  &:active {
    transition: 100ms transform ease-in;
    transform: translateY(0.2rem) scale(0.98);
  }
`;

export {Form, ExitBtn, Label, Textarea, Error, SubmitBtn};