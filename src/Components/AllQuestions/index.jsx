import style from './styles.module.scss';

import { useContext, useState } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';
import SingleQuestion from '../SingleQuestion'

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function AllQuestions() {
    const { Questoes } = useContext(QuestoesContext);
    const [isSubmited, setIsSubmited] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmited(true);

    };

    return (
        <div className={style.container}>
            <Container sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit} className={style.questoesWrap}>
                    {Questoes.map((questao) => {
                        return (
                            <SingleQuestion key={questao.id} questao={questao} questionarieSubmited={isSubmited} />
                        )
                    })}
                    <Button variant="contained" type="submit">Concluir Prova</Button>
                </form>
            </Container>
        </div >
    )
}