import style from './styles.module.scss';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';

export default function Confirmacao() {
    const { numeroQuestoes, setNumeroQuestoes } = useContext(QuestoesContext);
    return (
        <div className={style.container}>
            <Container sx={{ height: '80vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className={style.title_wrap}>
                    <h1>Deseja continuar com {numeroQuestoes} questões?</h1>
                </div>
                <ButtonGroup aria-label="outlined primary button group">
                    <Link to="/">
                        <Button variant="outlined" color="error" onClick={() => setNumeroQuestoes(0)}>Cancel</Button>
                    </Link>
                    <Link to="/questionario">
                        <Button variant="contained">Start</Button>
                    </Link>
                </ButtonGroup>
            </Container>
        </div >
    )
}