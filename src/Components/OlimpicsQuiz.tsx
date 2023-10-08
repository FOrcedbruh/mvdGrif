import style from './../styles/ComponentStyles/Olimpics.module.css';
import QuestionsType from '../types/QuestionsType';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { QuizType } from '../types/QuizType';




const OlimpicsQuiz: React.FC<QuizType> = ({correctValue, question, answers,  setPressed, setCorrectClick}) => {



    const ListButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: 'blueviolet',
        borderColor: 'blueviolet',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#ccc',
          borderColor: '#ccc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#ccc',
          borderColor: '#ccc',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem #fff',
        },
      });

      const OnclickHandler = (index: number) => {
        setPressed(true)
        if (index === correctValue) {
            setCorrectClick(true);
            
        }
        else if (index !== correctValue) {
            setCorrectClick(false);
        }
        else {
            setCorrectClick(false);
        }
    }
   



    return (
        <section className={style.quiz}>
            <h2>{question.question_text}</h2>
            
                <ul>
                    {answers.map((item, index) => {

                        return (
                            <li key={index} onClick={() => {OnclickHandler(index)}}><ListButton variant='contained' style={{'width': '100%'}}><p>{item}</p></ListButton></li>
                        )
                    })}
                </ul>
            
            
        </section>
    )
}



export  { OlimpicsQuiz };