import style from './../../styles/ComponentStyles/Register.module.css'
import { useState, useEffect } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { authAPI } from '../AuthorizationData';
import Checkbox from '@mui/material/Checkbox';
import mainGrif from './../../images/main-grif.svg';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';

const Register: React.FC = () => {


    // валидация формы и отправка данных

    type Inputs = {
        username: string,
        password: string,
        email: string,
    }

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<Inputs>({
        mode: 'onBlur'
    })



    // согласия

    const [check_1, setCheck_1] = useState<boolean>(false);
    const [check_2, setCheck_2] = useState<boolean>(false);
    const [check_3, setCheck_3] = useState<boolean>(false);

    const [validCheck, setValidCheck] = useState<boolean>(false);


    const handlerCheck_1 = () => {
        setCheck_1(!check_1)
    }
    const handlerCheck_2 = () => {
        setCheck_2(!check_2)
    }
    const handlerCheck_3 = () => {
        setCheck_3(!check_3)
    }

    useEffect(() => {
        if (check_1 && check_2 && check_3) {
            setValidCheck(true);
        } else {
            setValidCheck(false);
        };


    }, [check_1, check_2, check_3])

    // view password
    
    const [eye, setEye] = useState(true);



    

    // success bar

    const [succesBar, setSuccesBar] = useState<boolean>(false)
        


    const handleSuccessBar = () => {
        setSuccesBar(true);
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccesBar(false);
      };

    // отправка данных на сервер


    const onSubmit = (data: any) => {
        const username: string = data.username;
        const password: string = data.password;
        const email: string = data.email;
        console.log(
            username,
            password,
            email,
            data
        )
        authAPI.create(username, email, password).then(data => {console.log(data)});
        handleSuccessBar()
        reset();
    }

    


    return (
        <>
        <img src={mainGrif} className={style.mainGrif}/>
        <section className={style.aura}>
            <Button variant='text' color='secondary' className={style.goHomeBtn}><ArrowBackIcon /> <Link to='/'>На главную</Link></Button>
            <section className={`${style.regWin} regWin`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Регистрация</h1>
                    <section className={style.inputWindows}>
                            <section className={style.inputs}>
                                
                                <div className={style.regDiv}>
                                    <label htmlFor="username">Придумайте логин</label>
                                    <input  placeholder='Логин...' {...register('username', {
                                        required: 'Поле необходимо для дальнейшей авторизации!',
                                        minLength: {
                                            value: 4,
                                            message: 'Содержит минимум 4 символа!'
                                        }
                                    })}/>
                                    {errors.username && <section className={style.error}>{errors.username.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="email">Email</label>
                                    <input  placeholder="Ваша почта..." {...register('email',{
                                        required: 'Укажите почту!',
                                        pattern: {
                                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                                            message: 'Почта имеет определенный формат, укажите валидную почту!'
                                        }
                                    
                                    })}/>
                                    {errors.email && <section className={style.error}>{errors.email.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="password">Придумайте пароль</label>
                                    <input type={`${eye ? "password" : "text"}`}  placeholder="Ваш пароль..." {...register('password', {
                                        required: 'Придумайте пароль для вашего аккаунта!',
                                        minLength: {
                                            value: 8,
                                            message: 'Пароль должен содержать не менее 8 символов'
                                        }
                                    })}/>
                                    <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                                    {errors.password && <section className={style.error}>{errors.password.message}</section>}
                                </div>
                            </section>
                    <section className={style.checkboxies}>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_1} onClick={handlerCheck_1}/><p>С порядком проведения олимпиады, приложением и регламентом ознакомлен.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_2} onClick={handlerCheck_2}/><p>Cогласен получать информацию об этапах олимпиады, публикации заданий и результатов на e-mail.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_3} onClick={handlerCheck_3}/><p>Даю <Link to='/PDFReader' target='_blank'>согласие</Link> на обработку персональных данных.</p></div>
                    </section>
                </section>
                    
                    <input type="submit" className={style.regBtn} disabled={!(isValid && validCheck)} value={'Зарегистрироваться'}/>
                </form>
                <p>У вас уже есть аккаунт?<Link to='/войти'>Войти</Link></p>
                
            </section>
            <Snackbar open={succesBar} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert severity='success'>
                    Ваши данные отправлены, регистрация завершена!
                </MuiAlert>
            </Snackbar>
        </section>
        </>
        
        
    )
}


export default Register;