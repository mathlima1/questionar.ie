

import Header from '../../Components/Header';
import AllQuestions from '../../Components/AllQuestions';
import { QuestoesContext } from '../../Contexts/QuestoesContext';

import style from '../../Components/AllQuestions/styles.module.scss';
import { Link } from 'react-router-dom'

import { useContext } from 'react'

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Questionario() {
    const { Questoes, setNumeroQuestoes } = useContext(QuestoesContext);
    if (Questoes.length === 0) {
        return (
            <>
                <Header />
                <div className={style.containerErro}>
                    <Container sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className={style.erroWrap}>
                            <h5>Você ainda não escolheu o número de questões</h5>
                        </div>
                        <ButtonGroup aria-label="outlined primary button group">
                            <Link to="/">
                                <Button variant="contained" onClick={() => setNumeroQuestoes(0)}>Voltar</Button>
                            </Link>
                        </ButtonGroup>
                    </Container>
                </div >
            </>
        )
    } else {
        return (
            <>
                <Header />
                <AllQuestions />
            </>
        )
    }
}