import api from '../services/api';
import { createContext, useState } from 'react';

export const QuestoesContext = createContext();

export function QuestoesProvider({ children }) {
    const [numeroQuestoes, setNumeroQuestoes] = useState(0);
    const [Questoes, setQuestoes] = useState([]);

    async function getQuestions() {
        const questoes = await api.get(`api.php?amount=${numeroQuestoes}`);
        setQuestoes(questoes.data.results);
    }

    return (
        <QuestoesContext.Provider value={
            {
                Questoes,
                numeroQuestoes,
                setNumeroQuestoes,
                getQuestions
            }
        }
        >
            {children}
        </QuestoesContext.Provider>
    )
}