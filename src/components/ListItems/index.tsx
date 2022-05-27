import { MemorizedItem } from 'components';
import { ITodo } from 'models/todo.model';
import { Container } from './styles';

interface IListProps {
  list: ITodo[];
}

export const ListItems = ({ list }: IListProps) => {
  return (
    <Container>
      {
        list?.map(item => (
          <MemorizedItem key={item.id} description={item.description} id={item.id}/>
        ))
      }
    </Container>
  );
};
