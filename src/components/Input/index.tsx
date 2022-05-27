import { ChangeEventHandler, KeyboardEventHandler } from 'react';

import { Container } from './styles';

interface IInputProps {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyUpCapture: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
}

export const Input = ({placeholder, onChange, onKeyUpCapture, value}: IInputProps) => {
  return <Container
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onKeyUpCapture={onKeyUpCapture}
    autoFocus={true}
  />;
};
