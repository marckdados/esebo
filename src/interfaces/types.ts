import { HTMLAttributes } from 'react';
import { ThemedStyledProps, StyledComponentProps } from 'styled-components';

type MyComponentProps = {
  infoText: string | undefined;
};

type StyledMyComponentProps = StyledComponentProps<
  'div', // ou qualquer outro elemento HTML que você esteja estilizando
  any, // aqui você pode adicionar o tema do seu aplicativo
  MyComponentProps & HTMLAttributes<HTMLDivElement>, // aqui você une as suas props com as props nativas do HTMLDivElement
  never
>;

export { StyledMyComponentProps };
