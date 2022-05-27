import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #40D9B8;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: all ease-in-out .3s;

  :hover {
    filter: brightness(105%);
  }

  img {
    display: block;
    width: 24px;
    height: 24px;
  }

  @media screen and (max-width: 425px) {
    margin-left: 16px;  
  }
`;