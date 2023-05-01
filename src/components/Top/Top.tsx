import * as S from './style';
import PropsModal from '../../interfaces/modalInterface';
import icon from '../../assets/images/ESebo.png';

export default function Top({ setModal, setTypeForm }: PropsModal) {
  function showModal(): void {
    setModal('flex');
  }

  function showFormLogin(): void {
    setTypeForm('login');
  }

  function showFormSignUp(): void {
    setTypeForm('signup');
  }

  return (
    <S.Container>
      <img src={icon} alt="Icon" />
      <S.Topics>
        <span
          onClick={() => {
            showModal();
            showFormSignUp();
          }}
        >
          Cadastre-se
        </span>
        <span
          onClick={() => {
            showModal();
            showFormLogin();
          }}
        >
          Entrar
        </span>
      </S.Topics>
    </S.Container>
  );
}
