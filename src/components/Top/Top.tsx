import { Container } from './style';
import icon from '../../assets/images/ESebo.png';
import { Topics } from './style';
import PropsModal from '../../interface/modalInterface';

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
    <Container>
      <img src={icon} alt="Icon" />
      <Topics>
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
      </Topics>
    </Container>
  );
}
