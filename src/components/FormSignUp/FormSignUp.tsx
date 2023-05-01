import { Button } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './style';

export default function FormSignUp(): JSX.Element {
  return (
    <S.ContainerFormSignUp>
      <Input name="name" placeholder="nome" type="text" />
      <Input name="email" placeholder="email" type="email" />
      <Input name="password" placeholder="senha" type="password" />
      <Input name="confirmPassword" placeholder="confirme sua senha" type="password" />
      <Button text="Criar conta" />
    </S.ContainerFormSignUp>
  );
}
