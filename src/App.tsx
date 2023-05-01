import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Top from './components/Top/Top';
import Body from './pages/initalPage/Body';

function App() {
  const [modal, setModal] = useState('none');
  const [typeForm, setTypeForm] = useState('');
  return (
    <BrowserRouter>
      <Top modal={modal} setModal={setModal} setTypeForm={setTypeForm} typeForm={typeForm} />
      <Routes>
        <Route
          element={<Body modal={modal} setModal={setModal} setTypeForm={setTypeForm} typeForm={typeForm} />}
          path="/"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
