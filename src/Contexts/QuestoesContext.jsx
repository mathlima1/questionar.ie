import api from '../services/api';
import { createContext, useState } from 'react';

export const QuestoesContext = createContext();

export function QuestoesProvider({ children }) {
    const [numeroQuestoes, setNumeroQuestoes] = useState(0);
    const [Questoes, setQuestoes] = useState([]);


    async function getQuestions() {
        const questoes = await api.get(`api.php?amount=${numeroQuestoes}`);
        const questionsWithId = [];
        questoes.data.results.map((questao) => {
            return questionsWithId.push({ id: (Math.random() * (numeroQuestoes)), ...questao });

        })
        setQuestoes(questionsWithId);
    }
    console.log(Questoes);
    return (
        <QuestoesContext.Provider value={
            {

                Questoes,
                numeroQuestoes,
                setNumeroQuestoes,
                getQuestions,
            }
        }
        >
            {children}
        </QuestoesContext.Provider>
    )
}