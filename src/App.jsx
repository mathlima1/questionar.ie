import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Components/Header';
import Iniciar from './Components/Iniciar';
import Confirmacao from './Components/Confirmacao';
import Questoes from './Components/Questões/Questoes';

import { QuestoesProvider } from './Contexts/QuestoesContext'
export default function App() {
  return (
    <QuestoesProvider>
      <CssBaseline />
      <Router>
        <Header />
        <Routes >
          <Route path="/questionario" element={<Questoes />} />
          <Route path="/confimacao" element={<Confirmacao />} />
          <Route exact path="/" element={<Iniciar />} />
        </Routes >
      </Router>
    </QuestoesProvider>
  );
}

