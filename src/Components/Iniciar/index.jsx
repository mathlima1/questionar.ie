import style from './styles.module.scss';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';


export default function Iniciar() {
    const { numeroQuestoes, getQuestions, setNumeroQuestoes } = useContext(QuestoesContext);
    return (
        <div className={style.container}>
            <Container sx={{ height: '80vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className={style.title_wrap}>
                    <h1>Escolha o numero de questões que deseja responder</h1>
                </div>
                <div className={style.form_wrap}>
                    <TextField
                        margin="normal"
                        id="outlined-number"
                        label="Number"
                        type="text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        value={numeroQuestoes}
                        onChange={event => setNumeroQuestoes(event.target.value)}
                    />
                    <Link to="confirmacao">
                        <Button variant="outlined" onClick={getQuestions}>Confirmar</Button>
                    </Link>
                </div>
            </Container>
        </div >
    )
}