import PropsModal from '../../interfaces/modalInterface';
import ExitIcon from '../ExitIcon/ExitIcon';
import FormLogin from '../FormLogin/FormLogin';
import FormSignUp from '../FormSignUp/FormSignUp';
import * as S from './style';

export default function ModalComponent({ modal, setModal, typeForm, setTypeForm }: PropsModal) {
  return (
    <S.Overlay display={modal}>
      <S.Container display={modal}>
        <ExitIcon modal={modal} setModal={setModal} typeForm={typeForm} setTypeForm={setTypeForm} />
        <S.Title>Bem-vindo(a) ao Esebo</S.Title>
        {typeForm === 'login' ? <FormLogin /> : <FormSignUp />}
      </S.Container>
    </S.Overlay>
  );
}
