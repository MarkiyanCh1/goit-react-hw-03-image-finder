import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  right: 0;
  top: 0;
  z-index: 900;
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  background-color: rgb(63 81 181);
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: black;
  box-shadow:  0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
  max-width: 600px;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  background-color: rgb(255 255 255);
  padding-right: 4px;
`;

export const Button = styled.button`
  height: 50px;
  width: 50px;
  background-color: rgb(203 213 225);
  padding: 8px;
  opacity: .6;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-left: 15px;
  padding-right: 5px;
  font-size: 20px;
  outline: none;
  border: none;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
