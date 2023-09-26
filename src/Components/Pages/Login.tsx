import style from './../../styles/ComponentStyles/Register.module.css'
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import { authAPI } from '../AuthorizationData';

const Login: React.FC = () => {

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
    }


    return (
        <section className={style.aura}>
            <section className={`${style.regWin} regWin`}>
            <form method='post'>
                <h1>Войти</h1>
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
                <button type='submit' className={style.regBtn} disabled={!formValid} onClick={loginHandler}>Войти</button>
            </form>
            <p>
            У вас еще нет аккаунта?
                <Link to='/регистрация'>Зарегистрироваться</Link>
            </p>
        </section>
        </section>
        
    )
}


export default Login;