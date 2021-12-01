import style from './styles.module.scss';

import { useState, useEffect } from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function SingleQuestion({ questao, questionarieSubmited }) {

    const [alternativas, setAlternativas] = useState([]);
    const [value, setValue] = useState(localStorage.getItem(`MarkedQuestion${questao.id}`) || '');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');


    const answers = [...questao.incorrect_answers, questao.correct_answer];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    useEffect(() => {
        shuffleArray(answers);
        setAlternativas(answers)
    }, [])

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
    };
    function handleShowResult() {
        if (value === questao.correct_answer) {
            localStorage.setItem(`MarkedQuestion${questao.id}`, value);
            setHelperText('Boa, Questão Correta');
            setError(false);
        } else {
            localStorage.setItem(`MarkedQuestion${questao.id}`, value);
            setHelperText('Alternativa errada!');
            setError(true);
        }
    };

    useEffect(() => {
        if (questionarieSubmited) {
            handleShowResult()
        }
    }, [questionarieSubmited])


    return (
        <div className={style.container}>
            <div className={style.questao}>
                <p>{questao.question}</p>
                <div >
                    <FormControl
                        component="fieldset"
                        error={error}
                        variant="standard"
                    >
                        <RadioGroup
                            aria-label={questao.question}
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            {alternativas.map((answer) => {
                                if (questionarieSubmited) {
                                    return (<FormControlLabel disabled key={answer} value={answer}
                                        control={<Radio />} label={answer} className={answer === questao.correct_answer ? style.correctAnswer : ""} />)
                                } else {
                                    return (<FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />)

                                }
                            })}
                        </RadioGroup>
                        <div className='result'>
                            <FormHelperText className={error ? style.erro : style.acerto}>{helperText}</FormHelperText>
                        </div>
                    </FormControl>
                </div>


            </div >
        </div >
    )
}