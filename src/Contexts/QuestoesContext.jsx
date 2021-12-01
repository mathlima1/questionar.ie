import api from '../services/api';
import { createContext, useState, useEffect } from 'react';


export const QuestoesContext = createContext();

export function QuestoesProvider({ children }) {
    const [numeroQuestoes, setNumeroQuestoes] = useState(0);
    const [Questoes, setQuestoes] = useState([]);
    let storedQuestions = localStorage.getItem("Questões");
    const storedQuestionsParsed = JSON.parse(storedQuestions);


    useEffect(() => {
        setQuestoes(storedQuestionsParsed);
    }, [])

    async function getQuestions() {
        localStorage.clear();
        const questoes = await api.get(`api.php?amount=${numeroQuestoes}`);
        const questionsWithId = [];
        questoes.data.results.map((questao) => {
            return questionsWithId.push({ id: (Math.random() * (numeroQuestoes)), ...questao });

        })
        setQuestoes(questionsWithId);
    }
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