import styled from 'styled-components';

export const Image = styled.img`
  height: 260px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 6px 4px rgb(0 0 0 / 33%);
  &:hover {
    box-shadow: 0px 10px 9px 15px rgb(0 0 0 /33%);
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
