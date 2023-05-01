import { ButtonHTMLAttributes } from 'react';

export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
