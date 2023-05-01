import { ButtonProps } from '../../interfaces/buttonInterface';
import * as S from './style';

const ButtonFilter: React.FC<ButtonProps> = (props) => {
  return <S.ContainerButtonFilter>{props.text}</S.ContainerButtonFilter>;
};

export { ButtonFilter };
