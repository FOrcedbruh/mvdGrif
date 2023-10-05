import style from './../../styles/ComponentStyles/Olimpics.module.css';
import photo from './../../images/photo.webp';
import QuestionsType from '../../types/QuestionsType';
import { OlimpicsQuiz } from '../OlimpicsQuiz';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Answers } from '../../types/QuestionsType';






const Olimpics: React.FC = () => {


    

    const Questions: Array<QuestionsType> = [
        {
            id: 1,
            question_text: 'cwqiuocbwqioucbwyoicwquoycbwqyocb',
            answers: {
                answer_1: 'pwu  ecbwpquc',
                answer_2: 'cjobqweubcqw',
                answer_3: 'cow1npcin1w',
                answer_correct: 'pd92[op1dcn12 c',
            },
            value: 4
        },
        {
            id: 2,
            question_text: 'лмтывфджмфволжмтж',
            answers: {
                answer_correct: 'oicuygwqpiucbw',
                answer_1: 'pwu  ecbwpquc',
                answer_2: 'cjobqweubcqw',
                answer_3: 'cow1npcin1w',
            },
            value: 8
        },
        {
            id: 3,
            question_text: 'cwqiuocbwqioucbwyoicwquoycbwqyocb',
            answers: {
                answer_1: 'pwu  ecbwpquc',
                answer_2: 'cjobqweubcqw',
                answer_correct: 'pd92[op1dcn12 c',
                answer_3: 'cow1npcin1w',
            },
            value: 2
            
        }
    ]

    



    const [step, setStep] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);

    const [pressed, setPressed] = useState<boolean>(false)
    

    const question = Questions[step];

    const answers: Array<string> = Object.values(question.answers);


    
    const correctText: string = question.answers.answer_correct;
    const correctValue = answers.indexOf(correctText);
    
    

    const ClickBtnHandler = () => {
        console.log("балы", points);
        console.log('правильные ответы', correct)
        setStep(step + 1);
        setPressed(false)
    }


    return (
        <>
            <section className={style.window}>
                            <div className={style.testImage}>
                                <img src={photo}/>
                            </div>
                            <div className={style.test}>
                                <OlimpicsQuiz Questions={Questions} question={question}  correct={correct} setCorrect={setCorrect} points={points} setPoints={setPoints} answers={answers} correctValue={correctValue} pressed={pressed} setPressed={setPressed}/>
                            </div>
                            <Button color='secondary' variant='contained' onClick={ClickBtnHandler}>Дальше</Button>
            </section>
        </>
    )
}




export default Olimpics;