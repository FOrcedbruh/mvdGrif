
import QuestionsType from "./QuestionsType";



export interface QuizType {
    question: QuestionsType,
    answers: Array<string>,
    correctValue: number,
    setPressed: React.Dispatch<React.SetStateAction<boolean>>,
    setCorrectClick: React.Dispatch<React.SetStateAction<boolean>>
}