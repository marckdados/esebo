import styled from 'styled-components';

interface Props {
  display: string;
}

const Overlay = styled.div`
  @keyframes open-linear-overlay {
    to {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: linear;
  background-color: rgba(255, 255, 255, 0);
  display: ${(p: Props) => p.display};
  justify-content: center;
  align-items: center;
  animation: open-linear-overlay 0.3s forwards ease;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  margin: 0 4em 0 4em;
`;

const Container = styled.div`
  position: relative;
  display: ${(p: Props) => (p.display ? 'flex' : 'none')};
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  gap: calc(1.5em);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
`;

export { Container, Overlay, Title };
