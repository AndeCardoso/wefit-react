import { Container } from './styles';

interface ICardProps {
  children: JSX.Element | JSX.Element[];
}

export const Card = ( {children}: ICardProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
