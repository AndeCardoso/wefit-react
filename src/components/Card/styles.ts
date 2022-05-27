import styled from 'styled-components';

export const Container = styled.div`
  width: 352px;
  max-width: 352px;
  height: 352px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 425px) {
    margin: 15px;
  }
`;