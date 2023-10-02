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


const Register: React.FC = () => {


    // values для валидации и отправки на сервер

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('Email не может быть пустым!');
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым!');
    const [clas, setClas] = useState<string>('');
    const [snils, setSnils] = useState<string>('');
    const [phone, setPhone] = useState<string | undefined>('');
    const [nameError, setNameError] = useState<string>('Имя не может быть пустым!');
    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [usernameDirty, setUsernameDirty] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('Username не может быть пустым!');
    const [region, setRegion] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [first_name,  setFirst_name] = useState<string>('');
    const [last_name,  setLast_name] = useState<string>('');
    const [school, setSchool] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
    const [passwordMatchError, setPasswordMatchError] = useState<string>('Пароли не совпадают!');
    const [inputError, setInputError] = useState<string>('Это поле обязательно к заполнению!');
    const [inputDirty, setInputDirty] = useState<boolean>(false);
    const [formValid, setFormValid] = useState<boolean>(false);



    // согласия

    const [check_1, setCheck_1] = useState<boolean>(false);
    const [check_2, setCheck_2] = useState<boolean>(false);
    const [check_3, setCheck_3] = useState<boolean>(false);


    const handlerCheck_1 = () => {
        setCheck_1(!check_1)
    }
    const handlerCheck_2 = () => {
        setCheck_2(!check_2)
    }
    const handlerCheck_3 = () => {
        setCheck_3(!check_3)
    }

    const [eye, setEye] = useState(true);

    // handlers для контроля values

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);

        if (!e.target.value) {
            setUsernameError('Username не может быть пустым!');
        }
        else {
            setUsernameError('');
        }
    }

    const schoolHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchool(e.target.value);
        if (e.target.value) {
            setInputError('')
        }
        else {
            setInputError('Это поле обязательно к заполнению!')
        }
    }


    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email!');
        }
        else {
            setEmailError('');
        }
    }

    const regionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(e.target.value);
        if (e.target.value) {
            setInputError('')
        }
        else {
            setInputError('Это поле обязательно к заполнению!')
        }
    }

    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        if (e.target.value) {
            setInputError('')
        }
        else {
            setInputError('Это поле обязательно к заполнению!')
        }
    }

    const snilsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        var snilsValue: string = e.target.value;
        setSnils(snilsValue);
        if (snilsValue) {
            setInputError('')
        }
        else {
            setInputError('Это поле обязательно к заполнению!')
        }
    }

    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        if (e.target.value) {
            setInputError('')
        }
        else {
            setInputError('Это поле обязательно к заполнению!')
        }
    }

    const fnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirst_name(e.target.value);
        if (e.target.value.length > 0) {
            setNameDirty(true);
            setNameError('');
        }
        if (!e.target.value) {
            setNameError('Имя не может быть пустой!');
        }
    }

    const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLast_name(e.target.value);
        if (e.target.value.length > 0) {
            setNameDirty(true);
            setNameError('');
        }
        if (!e.target.value) {
            setNameError('Имя не может быть пустым!');
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

    const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password) {
            setPasswordMatch(true);
            setPasswordMatchError('');
        }
        else {
            setPasswordMatchError('Пароли не совпадают');
        }
        
    }
    
    


    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            // @ts-ignore
            case 'password': 
                setPasswordDirty(true);
                // @ts-ignore
            case 'email':
                setEmailDirty(true);
                // @ts-ignore
            case 'firts_name':
                setNameDirty(true);
                // @ts-ignore
            case 'username': 
                setUsernameDirty(true);
                // @ts-ignore
            case 'ConfirmPassword':
                setPasswordMatch(true);
                // @ts-ignore
            case 'phone':
                setInputDirty(true);
                // @ts-ignore
            case 'region':
                setInputDirty(true);
                // @ts-ignore
            case 'school':
                setInputDirty(true);
            case 'city':
                setInputDirty(true);
            break;
        }
    }

    useEffect(() => {
        if (passwordError || emailError || nameError || passwordMatchError || usernameError) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [passwordError, emailError, nameError, passwordMatchError, usernameError])


    


    const handleClass = (e: SelectChangeEvent) => {
        setClas(e.target.value as string)
    }

    

    const handleGender = (e: SelectChangeEvent) => {
        setGender(e.target.value as string);
    }




    // отправка данных на сервер

      const handleRegister = () => {
        authAPI.create(username, first_name, last_name, email, region, city, password).then(data => {console.log(data)});
      }


    return (
        <>
        <img src={mainGrif} className={style.mainGrif}/>
        <section className={style.aura}>
            <Button variant='text' color='secondary' className={style.goHomeBtn}><ArrowBackIcon /> <Link to='/'>На главную</Link></Button>
            <section className={`${style.regWin} regWin`}>
                <form name='register'>
                    <h1>Регистрация</h1>
                    <section className={style.inputWindows}>
                            <section className={style.inputs}>
                                <div className={style.regDiv}>
                                    <label htmlFor="firts_name">Имя</label>
                                    <input type="text" placeholder='Иван...' name='firts_name' value={first_name} onChange={e => {fnameHandler(e)}} onBlur={e => {blurHandler(e)}}/>
                                    {(nameDirty && nameError) && <section className={style.error}>{nameError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="last_name">Фамилия</label>
                                    <input type="text" placeholder='Иванов...' name='last_name' onChange={e => {lnameHandler(e)}} onBlur={e => {blurHandler(e)}}/>
                                    {(nameDirty && nameError) && <section className={style.error}>{nameError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name='username' placeholder='Username...' value={username} onChange={e => {usernameHandler(e)}}/>
                                    {(usernameDirty && usernameError) && <section className={style.error}>{usernameError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Ваша почта..."/>
                                    {(emailDirty && emailError) && <section className={style.error}>{emailError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="region">Регион</label>
                                    <input type="text" name='region' value={region} placeholder='Ваш Регион...' onChange={e => {regionHandler(e)}}/>
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="city">Населенный пункт</label>
                                    <input type="text" name='city' value={city} placeholder='Ваш Город...' onChange={e => {cityHandler(e)}}/>
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="snils">Ваш СНИЛС</label>
                                    <input type="number" name='snils' placeholder='xxx-xxx-xxx yy' value={snils} onChange={e => snilsHandler(e)}/>
                                </div>
                            </section>
                            <section className={style.inputs}>
                                <div className={style.regDiv}>
                                    <label htmlFor="gender">Пол</label>
                                    <Select label="Ваш пол" color='secondary' value={gender} onChange={handleGender} style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                        <MenuItem value={"Мужской"}>Мужской</MenuItem>
                                        <MenuItem value={"Женский"}>Женский</MenuItem>
                                    </Select>
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="class">Класс обучения</label>
                                    <Select label="Ваш класс" color='secondary' value={clas} onChange={handleClass} style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                    </Select>
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="school">Наименование учебного заведения</label>
                                    <input type="text" value={school} name='school' onChange={e => {schoolHandle(e)}} placeholder='Ваше учебное заведение...' onBlur={e => blurHandler(e)}/>
                                    {(inputError && inputDirty) && <section className={style.error}>{inputError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="password">Придумайте пароль</label>
                                    <input value={password} onChange={e => passworHandler(e)} onBlur={e => blurHandler(e)} type={`${eye ? "password" : "text"}`} name="password" placeholder="Ваш пароль..."/>
                                    <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                                    {(passwordDirty && passwordError) && <section className={style.error}>{passwordError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="ConfirmPassword">Подтвердите пароль</label>
                                    <input type="password" name='ConfirmPassword' value={confirmPassword} onBlur={e => blurHandler(e)} onChange={e => {confirmPasswordHandler(e)}} placeholder='Ваш пароль...'/>
                                    {(passwordMatchError && passwordMatch) && <section className={style.error}>{passwordMatchError}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="date">Дата рождения</label>
                                    <input type="date" placeholder='Дата рождения'/>
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="phone">Номер телефона</label>
                                    <input type="tel" name='phone' value={phone} placeholder='Ваш телефон...' onChange={e => phoneHandler(e)} onBlur={e => blurHandler(e)}/>
                                    {(inputError && inputDirty) && <section className={style.error}>{inputError}</section>}
                                </div>
                            </section>
                    </section>
                    <section className={style.checkboxies}>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_1} onClick={handlerCheck_1}/><p>С порядком проведения олимпиады, приложением и регламентом ознакомлен.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_2} onClick={handlerCheck_2}/><p>Cогласен получать информацию об этапах олимпиады, публикации заданий и результатов на e-mail.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_3} onClick={handlerCheck_3}/><p>Даю <Link to='/PDFReader'>согласие</Link> на обработку персональных данных.</p></div>
                    </section>
                    <button form='register' type='submit' className={style.regBtn} disabled={!formValid} onClick={handleRegister}>Зарегистрироваться</button>
                </form>
                <p>У вас уже есть аккаунт?<Link to='/войти'>Войти</Link></p>
            </section>
        </section>
        </>
        
        
    )
}


export default Register;