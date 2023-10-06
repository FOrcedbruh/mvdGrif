
import QuestionsType from "./QuestionsType";



export interface QuizType {
    Questions: Array<QuestionsType>,
    question: QuestionsType,
    correct: number,
    setCorrect: React.Dispatch<React.SetStateAction<number>>,
    points: number,
    setPoints: React.Dispatch<React.SetStateAction<number>>,
    answers: Array<string>,
    correctValue: number,
    pressed: boolean,
    setPressed: React.Dispatch<React.SetStateAction<boolean>>,
    correctClick: boolean,
    setCorrectClick: React.Dispatch<React.SetStateAction<boolean>>,
}