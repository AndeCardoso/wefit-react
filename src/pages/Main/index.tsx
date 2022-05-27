import { Header, ListItems, Card } from 'components';
import { Container, Content } from './styles';

import { RootState,  } from 'store';
import { useSelector } from 'react-redux';
import { ITodo } from 'models/todo.model';

export const Main = () => {
  const list: ITodo[] = useSelector<RootState>((state: RootState) => state.todoList) as ITodo[];
  return(
    <Container>
      <Card>
        <Header />
        {
          list.length > 0 ?
            <ListItems list={list} />
            :
            <Content>
              <span>Nenhum item cadastrado</span>
            </Content>
        }
      </Card>
    </Container>
  );
};
