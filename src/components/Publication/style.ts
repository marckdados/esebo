import styled from 'styled-components';

const ComponentWrapper = styled.div`
  height: 500px;
  width: calc(25% - 10px); /* 4 items por linha */
  margin: 5px;
  position: relative;
  &:hover .overlay {
    opacity: 0.9;
    transition-delay: 0.1s;
    cursor: pointer;
  }
`;
const AboutPublishText = styled.span`
  font-size: 0.9em;
  color: #fff;
`;

const Infos = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

const ComponentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(32, 66, 31, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`;
const InfoText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

const IconGenre = styled.div`
  padding: 0 10px;
  min-width: 20%;
  height: 30px;
  background-color: #fff;
  color: rgba(32, 66, 31, 1);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export { AboutPublishText, ComponentImage, ComponentWrapper, IconGenre, InfoText, Infos, Overlay };
