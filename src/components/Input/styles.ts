import styled from 'styled-components';

export const Container = styled.input`
  width: 258px;
  max-width: 258px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  font-size: 16px;
  line-height: 18.75px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  transition: all ease-in-out .3s;
  
  :focus-visible {
    outline: 0;
    border: none;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 425px) {
    width: 75%;  
  }
`;