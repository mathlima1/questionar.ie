import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';


import Home from './Pages/Home';
import Confirmacao from './Pages/Confirmacao';
import Questionario from './Pages/Questionario';

import { QuestoesProvider } from './Contexts/QuestoesContext'
export default function App() {
  return (
    <QuestoesProvider>
      <CssBaseline />
      <Router>
        <Routes >
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route exact path="/" element={<Home />} />
        </Routes >
      </Router>
    </QuestoesProvider>
  );
}

