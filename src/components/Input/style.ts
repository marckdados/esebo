import styled from 'styled-components';

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 3em;
    border: none;
    padding-left: 5px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      padding-left: 2px;
      font-weight: bold;
    }
  }
`;
const UnderlineInput = styled.div`
  width: 100%;
  height: 2px;
  background-color: #345a4d;
`;
export { ContainerInput, UnderlineInput };
