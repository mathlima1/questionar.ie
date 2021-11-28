import style from './styles.module.scss';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function Questoes() {
    const { Questoes, setNumeroQuestoes } = useContext(QuestoesContext);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    if (Questoes.length === 0) {
        return (
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
        )
    }
    else {
        return (
            <div className={style.container}>
                <Container sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className={style.questoesWrap}>
                        {Questoes.map((questao) => {
                            console.log(questao);
                            const alternativas = [...questao.incorrect_answers, questao.correct_answer];
                            shuffleArray(alternativas);
                            return (
                                <div key={questao.id} className={style.questao}>
                                    <p>{questao.question}</p>


                                    <RadioGroup
                                        aria-label={questao.question}
                                        defaultValue=""
                                        name="radio-buttons-group"
                                    >
                                        {alternativas.map((answer) => {
                                            return (

                                                <FormControlLabel value={answer} control={<Radio />} label={answer} />
                                            )
                                        })}
                                    </RadioGroup>

                                </div>
                            )

                        })}
                    </div>
                    <ButtonGroup aria-label="outlined primary button group">
                        <Link to="/">
                            <Button variant="outlined" color="error" onClick={() => setNumeroQuestoes(0)}>Cancel</Button>
                        </Link>
                        <Button variant="contained">Concluir</Button>
                    </ButtonGroup>
                </Container>
            </div >
        )
    }

}