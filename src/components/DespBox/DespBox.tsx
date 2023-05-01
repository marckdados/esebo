import { Link } from 'react-scroll';
import * as S from './style';

export default function DespBox() {
  return (
    <S.ContainerDespBox>
      <S.TitleGroup>
        <h3>Troque livros e novas histórias</h3>
        <p>
          Na Esebo você pode trocar seus livros que está à muito tempo na sua estante com outras pessoas ! Comece a
          publicar seus livros para trocar ou confira os livros de nossos outros usuários.
        </p>
        <S.ButtonsBox>
          <S.ButtonPublish>Publicar</S.ButtonPublish>

          <S.ButtonExplore>
            <Link to="explore" duration={500} smooth={true}>
              Explorar
            </Link>
          </S.ButtonExplore>
        </S.ButtonsBox>
      </S.TitleGroup>
    </S.ContainerDespBox>
  );
}
