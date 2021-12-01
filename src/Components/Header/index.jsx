import style from './styles.module.scss';
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Header() {
    let storedQuestions = localStorage.getItem("Questões");
    const storedQuestionsParsed = JSON.parse(storedQuestions);
    function handleShowLastQuiz() {
        if (storedQuestionsParsed) {
            return (
                <Link to="/questionario">
                    <Button variant="outlined" className={style.button} >
                        Ver último questionario
                    </Button >
                </Link>
            )
        }
    }
    return (
        <div className={style.container}>
            <Container sx={{ height: '15vh' }} className={style.container_wrapper}>
                <div>
                    <Link to="/"><span>Questionar.ie</span></Link>
                </div>
                {handleShowLastQuiz()}
            </Container>
        </div>
    )
}