import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #CCCCCC;
  background-color: #F2F2F2;
  margin-top: 24px;
  animation: fadeIn 0.3s both;

  @keyframes fadeIn {
    from{opacity: 0}
    to{opacity: 1}
  }  

  span {
    font-size: 12px;
    font-weight: 400;
    color: #606060;
  }
`;