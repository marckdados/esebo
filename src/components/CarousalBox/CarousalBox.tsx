import * as S from './style';

export default function CarousalBox() {
  return (
    <S.ContainerCarousalBox>
      <S.GridContainerMain>
        <img
          src="https://img.freepik.com/premium-psd/realistic-book-cover-mockup_449870-45.jpg?size=626&ext=jpg"
          alt="Grid-1"
        />
      </S.GridContainerMain>
      <S.GridContainerSubs>
        <S.ContainerSub>
          <img
            src="https://img.freepik.com/free-psd/hard-cover-book-mockup-scene_358694-4847.jpg?w=1380&t=st=1680371940~exp=1680372540~hmac=99f7bdb4e3901874f3123098a3fca44e495cce4d3128f8dc94170c76649b7911"
            alt="Grid-2"
          />
        </S.ContainerSub>
        <S.ContainerSub>
          <img
            src="https://img.freepik.com/premium-psd/hard-cover-book-mockup-scene_358694-4844.jpg?size=626&ext=jpg"
            alt="Grid-3"
          />
        </S.ContainerSub>
      </S.GridContainerSubs>
    </S.ContainerCarousalBox>
  );
}
