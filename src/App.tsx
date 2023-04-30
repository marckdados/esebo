import { BrowserRouter } from 'react-router-dom';
import Top from './components/Top/Top';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState('none');
  const [typeForm, setTypeForm] = useState('');
  return (
    <BrowserRouter>
      <Top modal={modal} setModal={setModal} setTypeForm={setTypeForm} typeForm={typeForm} />
    </BrowserRouter>
  );
}

export default App;
