import styled from "styled-components";

const ContainerDespBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleGroup = styled.div`
  width: 70%;
  h3 {
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #868686;
    margin-bottom: 20px;
  }
`;

const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  gap: calc(20px);
`;

const ButtonPublish = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: #3d823b;
  color: #ffffff;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  cursor: pointer;
`;

const ButtonExplore = styled.button`
  width: 30%;
  height: 40px;
  border: 1px solid #3d823b;
  border-radius: 6px;
  color: #3d823b;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  cursor: pointer;
`;

export {ButtonExplore, ButtonsBox, TitleGroup, ContainerDespBox, ButtonPublish}