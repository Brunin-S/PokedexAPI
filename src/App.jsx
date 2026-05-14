import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lista from './pages/Lista';
import Detalhe from './pages/Detalhe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/pokemon/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  );
}