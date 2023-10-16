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
        passsord: string,
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string,
        region: string,
        city: string,
        phone: string,
        snils: string,
        date_birthday: string,
        school: string,
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


    const [sex, setSex] = useState<string>('Мужской')

    const sexHandle = (e: SelectChangeEvent<string>) => {
        setSex(e.target.value)
    }

    // логика для выбора школы и колледжа

    const [schoolCategory, setSchoolCategory] = useState<string>('Школа');

    const SchoolOrCollegeHandle = (e: SelectChangeEvent<string>)  => {
        setSchoolCategory(e.target.value);
    }

    const [grade, setGrade] = useState<string>('');

    const GradeHandle = (e: SelectChangeEvent<string>) => {
        setGrade(e.target.value);
    }
    

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

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        const username: string = data.username;
        const first_name: string = data.first_name;
        const last_name: string = data.last_name;
        const middle_name: string = data.middle_name;
        const email: string = data.email;
        const region: string = data.region;
        const phone: string = data.phone;
        const snils: string = data.snils;
        const date_birthday: string = data.date_birthday;
        const school: string = data.school;
        console.log(
            username,
            first_name,
            last_name,
            middle_name,
            email,
            region,
            phone,
            snils,
            date_birthday,
            school,
            data
        )
        reset();
    }

    // отправка данных на сервер

    //  const handleRegister = () => {
       // authAPI.create(username, first_name, last_name, email, region, city, password, sex, grade, phone, snils, middle_name, date_birthday, school).then(data => {console.log(data)});
       
    //  }


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
                                <h4>Информация о себе</h4>
                                <div className={style.regDiv}>
                                    <label htmlFor="firts_name">Имя</label>
                                    <input  placeholder='Иван...' {...register('first_name', {
                                        required: 'Поле с именем обязательно!',
                                        minLength: {
                                            value: 2,
                                            message: 'Поле должно содержать минимум 2 символа'
                                        }
                                    })}/>
                                    {errors.first_name && <section className={style.error}>{errors?.first_name.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="last_name">Фамилия</label>
                                    <input placeholder='Иванов...' {...register('last_name', {
                                        required: 'Поле  с фамилией обязательно!',
                                    })}/>
                                    {errors.last_name && <section className={style.error}>{errors.last_name.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="middle_name">Отчество</label>
                                    <input  placeholder='Ваше отчество...'  {...register('middle_name', {
                                        required: 'Поле с отчеством обязательно!'
                                    })}/>
                                    {errors.middle_name && <section className={style.error}>{errors.middle_name.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="username">Username</label>
                                    <input  placeholder='Username...' {...register('username', {
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
                                    
                                    })}/>
                                    {errors.email && <section className={style.error}>{errors.email.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="phone">Номер телефона</label>
                                    <input  placeholder='Ваш телефон...' {...register('phone', {
                                        required: 'Укажите телефон!',
                                        minLength: {
                                            value: 11,
                                            message: 'Номер телефона не может содержать меньше 11 символов!'
                                        }
                                    })}/>
                                    {errors.phone && <section className={style.error}>{errors.phone.message}</section>}
                                </div>
                                
                                
                                <div className={style.regDiv}>
                                    <label htmlFor="snils">СНИЛС</label>
                                    <input placeholder='xxx-xxx-xxx yy' {...register('snils', {
                                        required: 'Укажите СНИЛС!',
                                        minLength: {
                                            value: 11,
                                            message: 'СНИЛС  может содержать только 11 цифр!'
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: 'СНИЛС  может содержать только 11 цифр!'
                                        }
                                    })}/>
                                    {errors.snils && <section className={style.error}>{errors.snils.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="date">Дата рождения</label>
                                    <input type='date' placeholder='Дата рождения' {...register('date_birthday', {
                                        valueAsDate: true,
                                        required: 'Поле с датой рождения обязательно!'
                                    })}/>
                                    {errors.date_birthday && <section className={style.error}>{errors.date_birthday.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="sex">Пол</label>
                                    <Select  color='secondary' value={sex} onChange={e => sexHandle(e)}    style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                        <MenuItem value={"Мужской"}>Мужской</MenuItem>
                                        <MenuItem value={"Женский"}>Женский</MenuItem>
                                    </Select>
                                </div>
                            </section>
                            <section className={style.inputs}>
                                <h4>Информация об образовательной огранизации</h4>
                                <div className={style.regDiv}>
                                    <label htmlFor="region">Регион</label>
                                    <input  placeholder='Ваш Регион...' {...register('region', {
                                        required: 'Укажит регион!'
                                    })}/>
                                    {errors.region && <section className={style.error}>{errors.region.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="city">Населенный пункт</label>
                                    <input  placeholder='Ваш Город...' {...register('city', {
                                        required: 'Поле обязательно!'
                                    })}/>
                                    {errors.city && <section className={style.error}>{errors.city.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="SchoolOrCollege">Школа/Колледж</label>
                                    <Select  style={{width: 200}} color='secondary' value={schoolCategory} onChange={e => SchoolOrCollegeHandle(e)}>
                                        <MenuItem value={"Школа"}>Школа</MenuItem>
                                        <MenuItem value={"Колледж/Техникум"}>Колледж/Техникум</MenuItem>
                                    </Select>
                                </div>
                                {schoolCategory === 'Школа' &&  <div className={style.regDiv}>
                                    <label htmlFor="class">Класс обучения</label>
                                    <Select  color='secondary' value={grade} onChange={e => {GradeHandle(e)}}  style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                    </Select>
                                </div> }

                                {schoolCategory === 'Колледж/Техникум' && <div className={style.regDiv}>
                                        <label htmlFor="course">Курс обучения</label>
                                        <Select value={grade} onChange={e => {GradeHandle(e)}} style={{width: 100}}  color='secondary'>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                        </Select>
                                </div>}
                                <div className={style.regDiv}>
                                    <label htmlFor="school">Наименование учебного заведения</label>
                                    <input  placeholder='Ваше учебное заведение...' {...register('school', {
                                        required: 'Поле обязательно!'
                                    })}/>
                                   {errors.school && <section className={style.error}>{errors.school.message}</section>}
                                </div>
                                <div className={style.regDiv}>
                                    <label htmlFor="password">Придумайте пароль</label>
                                    <input type={`${eye ? "password" : "text"}`}  placeholder="Ваш пароль..." {...register('passsord', {
                                        required: 'Придумайте пароль для вашего аккаунта!',
                                        minLength: {
                                            value: 6,
                                            message: 'Пароль должен содержать не менее 6 символов'
                                        }
                                    })}/>
                                    <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                                    {errors.passsord && <section className={style.error}>{errors.passsord.message}</section>}
                                </div>
                            </section>
                    </section>
                    <section className={style.checkboxies}>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_1} onClick={handlerCheck_1}/><p>С порядком проведения олимпиады, приложением и регламентом ознакомлен.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_2} onClick={handlerCheck_2}/><p>Cогласен получать информацию об этапах олимпиады, публикации заданий и результатов на e-mail.</p></div>
                        <div className={style.checkbox}><Checkbox color='secondary' checked={check_3} onClick={handlerCheck_3}/><p>Даю <Link to='/PDFReader'>согласие</Link> на обработку персональных данных.</p></div>
                    </section>
                    
                    
                    <input type="submit" className={style.regBtn} disabled={!isValid}/>
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