import style from './../../styles/ComponentStyles/Register.module.css'
import { useState, useContext } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import { authAPI } from '../AuthorizationData';
import LoginType from '../../types/LoginType';
import mainGrif from './../../images/main-grif.svg';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Snackbar from '@mui/material/Snackbar';
import { StoreContext } from '../../contexts/storeContext';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';



const Login: React.FC<LoginType> = () => {

    type Inputs = {
        username: string,
        password: string
    }


    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset
    } = useForm<Inputs>({
        mode: 'onBlur'
    })


    const { snack, handleClose } = useContext(StoreContext);

    

    const [eye, setEye] = useState(true);

    


    const onSubmit = (data: any) => {
        const username: string = data.username;
        const password: string = data.password;
        console.log(username, password);
        authAPI.login(username, password).then(response => {
            const token = response.data.auth_token;
            // Сохраняем токен в localStorage
            localStorage.setItem('auth_token', token);
        })
        reset();
    }

    const profileLinkHandler = () => {
        window.location.assign('/профиль');
    }
 
    const {showProfile} = useContext(StoreContext);



    return (
        <>
            <img src={mainGrif} className={style.mainGrif}/>
            <section className={style.aura}>
                <Button variant='text' color='secondary' className={style.goHomeBtn}><ArrowBackIcon /> <Link to='/'>На главную</Link></Button>
                <section className={`${style.regWin} regWin`}>
                    <form name='login' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Авторизация</h1>
                        <div className={style.logDiv}>
                            <label htmlFor="username">Username</label>
                            <input placeholder='Username...' {...register('username', {
                                required: 'Введите логин'
                            })}/>
                            {errors.username && <section className={style.error}>{errors.username.message}</section>}
                        </div>
                        <div className={style.logDiv}>
                            <label htmlFor="password">Пароль</label>
                            <input type={`${eye ? "password" : "text"}`}  placeholder="Ваш пароль..." {...register('password', {
                                required: 'Введите пароль',
                                minLength: {
                                    value: 6,
                                    message: 'Пароль должен содержать не менее 6 символов!'
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'не менее 1 спец. символа, 1 цифры, заглавной и прописной буквы!'
                                }
                            })}/>
                            <div onClick={() => {setEye(!eye)}} className={style.eyeLog}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                            {errors.password  && <section className={style.error}>{errors.password.message}</section>}
                        </div>
                        <input onClick={profileLinkHandler} type="submit" className={style.regBtn} disabled={!isValid} value={'Войти'}/>
                    </form>
                    <p>
                    У вас еще нет аккаунта?
                        <Link to='/регистрация'>Зарегистрироваться</Link>
                    </p>
                </section>
                <Snackbar 
                    open={snack}
                    autoHideDuration={5000}
                    onClose={handleClose}
                >
                    <Alert severity='warning' sx={{width: '100%'}}>
                        Авторизируйтесь или зарегистрируйтесь для дальнейшей работы
                    </Alert>
                </Snackbar>
            </section>
        </>
        
        
    )
}


export default Login;