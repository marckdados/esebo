import { HTMLAttributes } from 'react';
import * as S from './style';

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
  text: string;
}

const TitleTopics: React.FC<TitleProps> = (props) => {
  return <S.ContainerTitle>{props.text}</S.ContainerTitle>;
};

export { TitleTopics };
