
export interface Answers {
    answer_1: string,
    answer_2: string,
    answer_3: string,
    answer_correct: string
}

export default interface QuestionsType {
    id: number,
    question_text: string,
    value: number,
    answers: Answers,
    image: string,
}