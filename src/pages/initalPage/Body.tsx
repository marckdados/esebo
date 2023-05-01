import Explorar from '../../components/Explorar/Explorar';
import ModalComponent from '../../components/Modal/Modal';
import PropsModal from '../../interfaces/modalInterface';
import * as S from './style';
import CarousalBox from '../../components/CarousalBox/CarousalBox';
import DespBox from '../../components/DespBox/DespBox';
import Recents from '../../components/Recents/Recents';

export default function Body({ modal, setModal, typeForm, setTypeForm }: PropsModal) {
  return (
    <S.ContainerBody>
      <ModalComponent modal={modal} setModal={setModal} setTypeForm={setTypeForm} typeForm={typeForm} />
      <S.MastContainer>
        <CarousalBox />
        <DespBox />
      </S.MastContainer>
      <Recents />
      <Explorar />
    </S.ContainerBody>
  );
}
