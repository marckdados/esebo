import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import * as S from './style';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <S.ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="email" type="email" {...register('example')} />
      <Input placeholder="senha" type="password" {...register('exampleRequired', { required: true })} />
      <Button text="Entrar" />
    </S.ContainerForm>
  );
}
