import style from './styles.module.scss';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';

export default function Questoes() {

    const { Questoes } = useContext(QuestoesContext);
    return (
        <div className={style.container}>
            <Container sx={{ height: '80vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className={style.questoesWrap}>
                    {Questoes.map((questao) => {
                        console.log(questao);
                        return (
                            <>
                                <p>{questao.question}</p>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label={questao.correct_answer} />
                                    {questao.incorrect_answers.map((answer) => {
                                        return (
                                            <FormControlLabel control={<Checkbox />} label={answer} />
                                        )
                                    })}
                                </FormGroup>
                            </>
                        )

                    })}
                </div>
                <ButtonGroup aria-label="outlined primary button group">
                    <Button variant="contained">Concluir</Button>
                </ButtonGroup>
            </Container>
        </div >
    )
}