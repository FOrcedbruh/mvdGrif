import style from './../../styles/ComponentStyles/Olimpics.module.css';
import QuestionsType from '../../types/QuestionsType';
import { OlimpicsQuiz } from '../OlimpicsQuiz';
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grif from './../../images/testGrif.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Link } from 'react-router-dom';
import { Alert, Button, Modal, Tooltip, Box, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reducerHooks';
import { nothing, increment, incrementPoints, decrementPoints } from '../../Store/reducers/correctSlice';
import { authAPI } from '../AuthorizationData';



interface ResultType {
    Questions: Array<QuestionsType>,
    points: number
}

const Result: React.FC<ResultType> = ({ Questions, points}) => {

    const [open, setOpen] = useState<boolean>(true);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }

    const correct = useAppSelector(state => state.correctSlice.correct)

    const ResultPost = () => {
        authAPI.ResultPost(points).then((data) => {console.log(data)})
    }

    return (
        <section className={style.result}>
            <div className={style.resultInfo}>
                <p>Ваш результат: <span><span>{correct}</span> / {Questions.length - 1}</span></p>
                <p>Количество баллов: <span style={{'color': 'chartreuse'}}>{points}</span></p>
            </div>
            <Link to='/'>
                <Button variant='contained' color='secondary' onClick={ResultPost}> <ArrowBackIcon/> Вернуться на главную </Button>
            </Link>

            <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
                <Alert severity='success'>
                    Поздравляем! Вы прошли олимпиаду.
                </Alert>
            </Snackbar>
        </section>
    )
}


const Olimpics: React.FC = () => {



    const dispatch = useAppDispatch();

    const {correct, points} = useAppSelector(state => state.correctSlice)
    

    const Questions: Array<QuestionsType> = [
        {
            id: 1,
            question_text: 'Что такое React...',
            answers: {
                answer_1: 'Утилита',
                answer_2: 'Фреймворк',
                answer_3: 'Язык программирания',
                answer_correct: 'Библиотека',
            },
            value: 4,
            image: 'https://ru.legacy.reactjs.org/logo-og.png'
        },
        {
            id: 2,
            question_text: 'SCSS это...',
            answers: {
                answer_correct: 'Препроцессор',
                answer_1: 'Утилита',
                answer_2: 'Каскадная таблица стилей',
                answer_3: 'метод разметки сайта',
            },
            value: 8,
            image: 'https://static-xf1.vietnix.vn/wp-content/uploads/2022/04/scss-sass-la-gi.webp'
        },
        {
            id: 3,
            question_text: 'TypeScript нужен для...',
            answers: {
                answer_1: 'Корректировки кода',
                answer_2: 'Ускорения C++',
                answer_correct: 'Типизации JS',
                answer_3: 'Работы с API',
            },
            value: 2,
            image: 'https://devio2023-media.developers.io/wp-content/uploads/2020/09/typescript.png'
        },
        {
            id: 3,
            question_text: 'MaterialUI это...',
            answers: {
                answer_1: 'Библиотека для API JS',
                answer_2: 'Фреймворк для анимаций React',
                answer_correct: 'Библиотека компонентов React',
                answer_3: 'Утилита стилей',
            },
            value: 2,
            image: 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png'
        },
        {
            id: 3,
            question_text: 'MaterialUI это...',
            answers: {
                answer_1: 'Библиотека для API JS',
                answer_2: 'Фреймворк для анимаций React',
                answer_correct: 'Библиотека компонентов React',
                answer_3: 'Утилита стилей',
            },
            value: 2,
            image: 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png'
        }
    ]

    



    const [step, setStep] = useState<number>(0);

    const [pressed, setPressed] = useState<boolean>(false);




    const [correctClick, setCorrectClick] = useState<boolean>(false);
    

    const question = Questions[step];

    const answers: Array<string> = Object.values(question.answers);


    
    const correctText: string = question.answers.answer_correct;
    const correctValue = answers.indexOf(correctText);
    
    

    const ClickBtnHandler = () => {
        setStep(step + 1);
        setPressed(false);
        if (correctClick === true) {
            dispatch(increment());
            dispatch(incrementPoints(question.value))
        }
        else if (correctClick === false) {
            dispatch(nothing())
            dispatch(decrementPoints())
        }
        setCorrectClick(false);
        console.log("балы", points);
    }


    // navigation and modal warning!


    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const [modal, setModal] = useState<boolean>(false);

    const OpenHandle = () => setModal(true);
    const onClose = () => setModal(false);

    const ModalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

    // zoom image

    const ZoomStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        bgcolor: 'transparent',
        p: 4,
      };



    const [zoom, setZoom] = useState<boolean>(false);


    const zoomHandler = () =>  setZoom(true);

    const zoomCloseHandler = () => setZoom(false);


    
    if (step > Questions.length - 2) {
        return <Result   Questions={Questions} points={points}/>
    }
    else {

        return (
            <>
                <section className={style.window}>
                                <Button className={style.backBtn} variant='text' color='secondary' onClick={OpenHandle}><ArrowBackIcon/> Назад</Button>
                                        <Modal open={modal} onClose={onClose}>
                                            <Box sx={ModalStyle} className={style.modal}>
                                                <Alert severity='warning' style={{'borderRadius': '20px'}}>
                                                    <div>
                                                        <p>Вы уверены, что хотите выйти? Все данные о ваших ответах будут утеряны.</p>
                                                        <Button color='secondary' onClick={goBack} variant='contained'>Выйти</Button>
                                                    </div>
                                                </Alert>
                                            </Box>
                                        </Modal>
                                        <Modal open={zoom} onClose={zoomCloseHandler}>
                                            <Box sx={ZoomStyle} className={style.zoom}>
                                                <img src={question.image} style={{'width': '100%', 'height': '100%'}}/>
                                            </Box>
                                        </Modal>
                                <img src={Grif} className={style.grif}/>
                                <div className={style.testImage}>
                                    <Tooltip title='Увеличить изображение' followCursor><img src={question.image} onClick={zoomHandler}/></Tooltip>
                                </div>
                                <div className={style.testAura}>
                                    <div className={style.test}>
                                        <OlimpicsQuiz  setCorrectClick={setCorrectClick}  question={question}   answers={answers} correctValue={correctValue}  setPressed={setPressed}/>
                                    </div>
                                    <Button color='secondary' variant='contained' onClick={ClickBtnHandler} disabled={!pressed} style={{'zIndex': 1, 'alignSelf': 'center'}}>Дальше <ArrowForwardIcon /></Button>
                                </div>
                                
                </section>
            </>
        )
    }
}




export default Olimpics;