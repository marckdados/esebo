import styled from 'styled-components';

const ContainerCarousalBox = styled.div`
  width: 40%;
  height: 350px;
  display: flex;
  justify-content: space-evenly;
`;

const GridContainerMain = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 220%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 1s ease-in-out;
  }

  img:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const GridContainerSubs = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(10px);
`;

const ContainerSub = styled.div`
  width: 100%;
  height: 175px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.308) 0px 5px 15px;
  img {
    width: 135%;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 1s ease-in-out;
  }

  img:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export { ContainerCarousalBox, ContainerSub, GridContainerMain, GridContainerSubs };
