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




const Login: React.FC<LoginType> = () => {


    const { snack, handleClose } = useContext(StoreContext);

    const [usernameDirty, setUsernameDirty] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('Username не может быть пустым!');
    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым!');
    const [formValid, setFormValid] = useState<boolean>(false);

    const [eye, setEye] = useState(true);

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);

        if (!e.target.value) {
            setUsernameError('Username не может быть пустым!');
        }
        else {
            setUsernameError('');
        }
    }

    
    const passworHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 15) {
            setPasswordError('Пароль должен быть длиннее 3 и меннее 15 символов!');
        }
        else if (!e.target.value) {
            setPasswordError('Пароль не должен быть пустым!');
        }
        else {
            setPasswordError('');
            setFormValid(true);
        }
    }


    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            // @ts-ignore
            case 'password':
                setPasswordDirty(true);
            case 'username':
                setUsernameDirty(true);
        }
    }


    const loginHandler = () => {
        authAPI.login(username, password).then(data => {console.log(data)});
        const token = localStorage.getItem('authToken');
        console.log(token);
        authAPI.me(token).then(data => {console.log(data)})
    }


    return (
        <>
            <img src={mainGrif} className={style.mainGrif}/>
            <section className={style.aura}>
                <Button variant='text' color='secondary' className={style.goHomeBtn}><ArrowBackIcon /> <Link to='/'>На главную</Link></Button>
                <section className={`${style.regWin} regWin`}>
                    <form name='login'>
                        <h1>Авторизация</h1>
                        <div className={style.logDiv}>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' placeholder='Username...' onChange={e => {usernameHandler(e)}}/>
                            {(usernameDirty && usernameError) && <section className={style.error}>{usernameError}</section>}
                        </div>
                        <div className={style.logDiv}>
                            <label htmlFor="password">Пароль</label>
                            <input onChange={e => passworHandler(e)} onBlur={e => blurHandler(e)} type={`${eye ? "password" : "text"}`} name="password" placeholder="Ваш пароль..."/>
                            <div onClick={() => {setEye(!eye)}} className={style.eyeLog}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                            {(passwordDirty && passwordError) && <section className={style.error}>{passwordError}</section>}
                        </div>
                        <button form='login' type='submit' className={style.regBtn} disabled={!formValid} onClick={loginHandler}>Войти</button>
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