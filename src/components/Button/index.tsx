import { MouseEventHandler } from 'react';

import { Container } from './styles';

import AddIcon from 'assets/ic-add.png';

interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({onClick}: IButtonProps) => {
  return (
    <Container onClick={onClick}>
      <img src={AddIcon} alt="Icone de adição" />
    </Container>
  );
};
