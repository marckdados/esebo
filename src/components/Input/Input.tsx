import { InputHTMLAttributes } from 'react';
import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <S.ContainerInput>
      <input {...props} />
      <S.UnderlineInput></S.UnderlineInput>
    </S.ContainerInput>
  );
};

export default Input;
