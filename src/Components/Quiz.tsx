import style from './../styles/ComponentStyles/Quiz.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tests } from '../tests';
import { useParams } from 'react-router-dom';
import { TestType } from '../types/Test';

interface CorrectType {
    correct: number;
}







const Result: React.FC<CorrectType> = ({correct}) => {
    return (
        <div className={style.aura}>   
            <div className={style.result}>
                <h1>Правильных  ответов <span>{correct}</span> / {test.length}</h1>
            </div>
        </div>
        
    )
}




const Quiz: React.FC = () => {
    

    const { id } = useParams();


    const test: Array<TestType> = tests[0].body;
    console.log(test.length)

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }


    const [step, setStep] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const question = test[step];


    
    const OnClickVariant = (index: number) => {
        console.log(step, index);
        setStep(step + 1);
        if (index === question.correct)
        {
            setCorrect(correct + 1);
        }
    }
    if (step > test.length - 1) {
        return (
            <Result correct={correct}/>
        )
    }

    const percentage = Math.round(step / test.length * 100);
    return (
        <section className={`${style.quizWin} quizWindow`}>
            <div className={style.quiz}>
                <div className={style.progress} style={{width: `${percentage}%`}}></div>
                <h1>{question.title}</h1>
                <section className={style.variants}>
                    {question.variants.map((text, index) => (<li key={index} onClick={() => OnClickVariant(index)}>{text}</li>))}
                </section>
            </div>
        </section>
    )
}

export default Quiz;