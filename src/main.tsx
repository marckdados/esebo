import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './assets/styles/globalStyles.tsx';
import styled from 'styled-components';
import { Container } from './main-style.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
