import * as S from './style';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import { Publication } from '../Publication/Publication';
import { TitleTopics } from '../TitleTopics/TitleTopics';
import book1 from '../../assets/images/Book1.jpeg';
import book2 from '../../assets/images/Book2.jpeg';
import book3 from '../../assets/images/Book3.jpeg';
import book4 from '../../assets/images/Book4.jpeg';

export default function Explorar() {
  return (
    <S.ContainerExplorar id="explore">
      <S.BoxButtons>
        <ButtonFilter text="Mostrar tudo" />
        <ButtonFilter text="Ação" />
        <ButtonFilter text="Aventura" />
        <ButtonFilter text="Criminal" />
        <ButtonFilter text="Horror" />
      </S.BoxButtons>
      <TitleTopics text="Explorar" />
      <S.BoxPublishs>
        <Publication src={book1} alt="1" infoText="kkkkkkkkkkkkkkkkk" genre="zul" />
        <Publication src={book2} alt="2" />
        <Publication src={book3} alt="4" />
        <Publication src={book4} alt="3" />
        <Publication src={book1} alt="1" />
        <Publication src={book2} alt="2" />
        <Publication src={book3} alt="4" />
        <Publication src={book4} alt="3" />
        <Publication src={book1} alt="1" />
        <Publication src={book2} alt="2" />
      </S.BoxPublishs>
    </S.ContainerExplorar>
  );
}
