import style from './styles.module.scss';
import Container from '@mui/material/Container';

export default function Header() {
    return (
        <div className={style.container}>
            <Container sx={{ height: '15vh' }} className={style.container_wrapper}>
                <div>
                    <span>Questionar.ie</span>
                </div>
            </Container>
        </div>
    )
}