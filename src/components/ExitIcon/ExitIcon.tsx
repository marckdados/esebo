import { IoIosClose } from 'react-icons/io';
import PropsModal from '../../interfaces/modalInterface';
import * as S from './style';

export default function ExitIcon({ setModal }: PropsModal) {
  function showModal(): void {
    setModal('none');
  }

  return (
    <S.ContainerExitIcon>
      <IoIosClose color="#000000" size="30px" onClick={() => showModal()} />
    </S.ContainerExitIcon>
  );
}
