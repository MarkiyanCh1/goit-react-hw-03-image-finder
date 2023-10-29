import React from 'react'
import { Btn } from './Button.styles';

const Button = ({ onClick }) => {
  return (
    <Btn
      type='button'
      onClick={onClick}
    >
      Load more
    </Btn>
  );
};

export default Button
