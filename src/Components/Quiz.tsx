import style from './../styles/ComponentStyles/Quiz.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tests } from '../tests';
import { useParams } from 'react-router-dom';
import { TestType } from '../types/Test';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





interface CorrectType {
    correct: number;
    testLength: number
}



const Result: React.FC<CorrectType> = ({correct, testLength}) => {
    return (
        <div className={style.aura}>   
            <div className={style.result}>
                <h1>Правильных  ответов <span>{correct}</span> / {testLength}</h1>
            </div>
        </div>
        
    )
}


const Quiz: React.FC = () => {
    

    let {id} = useParams();

    let numId = Number(id);



    const test: Array<TestType> = tests[numId].body;
    const testLength: number = test.length;

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
    if (step > testLength - 1) {
        return (
            <Result correct={correct} testLength={testLength}/>
        )
    }

    const percentage = Math.round(step / testLength * 100);

    return (
        <section className={`${style.quizWin} quizWindow`}>
            <Button className={style.backBtn} variant='text' color='secondary' onClick={goBack}><ArrowBackIcon />Назад</Button>
            <div className={style.quiz}>
                <div className={style.progress} style={{width: `${percentage}%`}}></div>
                <h1>{question.head}</h1>
                <section className={style.variants}>
                    {question.variants.map((text, index) => (<li key={index} onClick={() => OnClickVariant(index)}>{text}</li>))}
                </section>
            </div>
        </section>
    )
}

export default Quiz;