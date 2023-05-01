import * as S from './style';

const Publication = ({ alt, src, infoText, genre, aboutText }: PropsPublication) => {
  return (
    <S.ComponentWrapper>
      <S.ComponentImage src={src} alt={alt} />
      <S.Overlay className="overlay">
        <S.Infos>
          <S.InfoText>{infoText}</S.InfoText>
          <S.AboutPublishText>{aboutText}</S.AboutPublishText>
          {genre ? <S.IconGenre>{genre}</S.IconGenre> : ''}
        </S.Infos>
      </S.Overlay>
    </S.ComponentWrapper>
  );
};

export { Publication };
