import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: #F2F2F2;
  transition: all ease-in-out .3s;
  animation: fadeIn .3s normal;

  @keyframes fadeIn {
    from{opacity: 0}
    to{opacity: 1}
  }

  :hover {
    filter: contrast(95%);
  }

  .wrapper {
    width: 90%;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      height: 16px;
      width: auto;
      display: flex;
      align-items: center;
      border: none;
      cursor: pointer;

      img {
        height: 16px;
        width: auto;
      }
    }
  }
`;