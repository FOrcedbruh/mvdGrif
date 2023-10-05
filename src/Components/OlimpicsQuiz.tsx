import style from './../styles/ComponentStyles/Olimpics.module.css';
import QuestionsType from '../types/QuestionsType';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/storeContext';

interface QuizType {
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
}



const OlimpicsQuiz: React.FC<QuizType> = ({Questions, correct, setCorrect, points, setPoints,correctValue, question, answers, pressed, setPressed}) => {


    

    const OnclickHandler = (index: number) => {
        if (index === correctValue) {
            setPressed(true);
            setCorrect(correct + 1);
            if (pressed === true) {
                setCorrect(correct + 0);
            }
        }
        else if (correct > 0 && index != correctValue && pressed === true) {
            setPressed(true)
            setCorrect(correct - 1);
            
            if (pressed === true) {
                setCorrect(correct + 0);
            }
        }
        else {
            setCorrect(correct + 0);
        }
    }

    




    return (
        <section className={style.quiz}>
            <h2>{question.question_text}</h2>
            <ul>
                {answers.map((item, index) => {

                    return (
                        <li key={item} onClick={() => OnclickHandler(index)}>{item}</li>
                    )
                })}
            </ul>
        </section>
    )
}



export  { OlimpicsQuiz };