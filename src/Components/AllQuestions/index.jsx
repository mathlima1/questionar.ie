import style from './styles.module.scss';
import { Link } from 'react-router-dom'

import { useContext, useState } from 'react';
import { QuestoesContext } from '../../Contexts/QuestoesContext';
import SingleQuestion from '../SingleQuestion'

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function AllQuestions() {
    const { Questoes } = useContext(QuestoesContext);
    const [isSubmited, setIsSubmited] = useState(localStorage.getItem("Relatorio") || false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmited(true);
        localStorage.setItem("Questões", JSON.stringify(Questoes));
        localStorage.setItem("Relatorio", isSubmited);
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
                    <Button variant="contained" type={isSubmited ? "button" : "submit"}>{isSubmited ? <Link to="/">Voltar</Link> : 'Concluir'}</Button>
                </form>
            </Container>
        </div >
    )
}