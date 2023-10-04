import * as React from 'react';
import { useState, useContext } from 'react';
import style from './../../styles/ComponentStyles/InstructionPage.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import  Alert  from '@mui/material/Alert';
import { StoreContext } from '../../contexts/storeContext';
import Tooltip from '@mui/material/Tooltip';


interface State extends SnackbarOrigin {
    open: boolean,
}



const steps: Array<string> = ['Знакомство', 'Ваша осведомленность', 'Приступайте к решению тестовых заданий'];


const InstructionPage: React.FC = () => {


    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    // snackBar logics

    const {showProfile} = useContext(StoreContext);


    const [SnackOpen, setSnackOpen] = useState<boolean>(false);

    const handleClick = () => {
        setSnackOpen(true);
    }

    const handleClose = () => {
        setSnackOpen(false)
    }

    return (
        <section className={style.window}>
            <div className={style.stepper}>
                <Box sx={{ width: '60%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};
                                if (isStepOptional(index)) {
                                    labelProps.optional = (
                                    <Typography variant="caption" color='blueviolet'>Важно!</Typography>
                                    );
                                }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                                })}
                            </Stepper>
                            {activeStep === steps.length - 3 && <div className={style.info}><Typography fontSize={20} >Создайте {showProfile ? <a  href='#' onClick={handleClick}>аккаунт</a> : <Tooltip title='Перейти к регистрации'><Link to='/регистрация'>аккаунт</Link></Tooltip>}, если у вас его еще нет, иначе войдите в уже имеющийся.</Typography></div>}
                            {activeStep === steps.length - 2 && <div className={style.info}><Typography fontSize={20} >Ознакомьтесь с регламентом, <Tooltip title='Перейти к документу'><Link to='/PDFReader'>согласием</Link></Tooltip> на обработку персональных данных и правилами проведения онлайн олимпиады.</Typography></div>}
                            {activeStep === steps.length - 1 && <div className={style.info}><Typography fontSize={20} >Вы готовы учавствовать в олимпиаде и получать наивысшие баллы! Вперед к победам!!!</Typography></div>}

                            
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                <div className={style.info}><Typography sx={{ mt: 2, mb: 1 }} component='p' fontSize={30}>
                                   За работу!
                                </Typography></div>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset} color='secondary' variant='contained'>Сброс</Button>
                                </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>Шаг {activeStep + 1}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                    color="secondary"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                    variant='contained'
                                    >
                                    Назад
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }} variant='outlined'>
                                        Пропустить
                                    </Button>
                                    )}
                                    <Button onClick={handleNext} color='secondary' variant='contained'>
                                    {activeStep === steps.length - 1 ? 'Завершить' : 'Дальше'}
                                    </Button>
                                </Box>
                                </React.Fragment>
                            )}
                </Box>
            </div>     
            <Snackbar open={SnackOpen}  onClose={handleClose} autoHideDuration={4000}>
                <Alert severity='error'>
                    Вам не доступна страница регистрации, так как вы уже вошли в аккаунт!
                </Alert>
            </Snackbar>
        </section>
    )
}

export default InstructionPage;