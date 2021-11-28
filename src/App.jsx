import './styles/global.css';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Components/Header'
import Iniciar from './Components/Iniciar';
import Confirmacao from './Components/Confirmacao';

import { QuestoesProvider } from './Contexts/QuestoesContext'
export default function App() {
  return (
    <QuestoesProvider>
      <>
        <CssBaseline />
        <Header />
        <Iniciar />
        <Confirmacao />
      </>
    </QuestoesProvider>
  );
}

