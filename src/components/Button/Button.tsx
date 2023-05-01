import ButtonProps from '../../interfaces/buttonInterface';
import * as S from './style';

const Button: React.FC<ButtonProps> = (props) => {
  return <S.ContainerButton>{props.text}</S.ContainerButton>;
};

export { Button };
