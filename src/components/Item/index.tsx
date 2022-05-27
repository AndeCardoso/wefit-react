import { memo } from 'react';

import { useDispatch } from 'react-redux';
import { remove } from 'store/Todo.store';

import { ITodo } from 'models/todo.model';

import { Container } from './styles';

import DeleteIcon from 'assets/ic-delete.png';

const Item = ({ id, description }: ITodo ) => {
  const dispatch = useDispatch();

  const handlerRemoveItem = () => {
    dispatch(remove(id));
  };

  return (
    <Container key={id}>
      <div className='wrapper'>
        <span>{description}</span>
        <button onClick={handlerRemoveItem}>
          <img src={DeleteIcon} alt="Icone para remocao do item" />
        </button>
      </div>
    </Container>
  );
};

export const MemorizedItem = memo(Item);
