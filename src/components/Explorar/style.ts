import styled from 'styled-components';

const ContainerExplorar = styled.div`
  width: 90%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BoxPublishs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export { BoxButtons, BoxPublishs, ContainerExplorar };
