import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from 'store/Todo.store';

import { Button, Input } from 'components';

import { Container } from './styles';

export const Header = () => {
  const dispatch = useDispatch();

  const [item, setItem] = useState<string>('');

  const handlerAddItem = () => {
    dispatch(create(item));
    setItem('');
  };

  return (
    <Container>
      <Input
        value={item}
        onChange={event => setItem(event.target.value)}
        onKeyUpCapture={event => event.key.toLocaleLowerCase() === 'enter' ? handlerAddItem() : false }
        placeholder='Digite'
      />
      <Button onClick={handlerAddItem} />
    </Container>
  );
};
