import { HTMLAttributes } from 'react';
import { StyledComponentProps } from 'styled-components';

export type MyComponentProps = {
  infoText: string | undefined;
};

export type StyledMyComponentProps = StyledComponentProps<
  'div', // ou qualquer outro elemento HTML que você esteja estilizando
  any, // aqui você pode adicionar o tema do seu aplicativo
  MyComponentProps & HTMLAttributes<HTMLDivElement>, // aqui você une as suas props com as props nativas do HTMLDivElement
  never
>;
