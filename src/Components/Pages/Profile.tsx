import style from './../../styles/ComponentStyles/Profile.module.css';
import newsLine from './../../images/newsLine.svg';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AddingAvatar from '../AddingAvatar';
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import { StoreContext } from '../../contexts/storeContext';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppSelector } from '../../hooks/reducerHooks';





const Profile: React.FC = () => {

    

    const {first_name, last_name,  setFirst_name, setLast_name, preview, setPreview} = useContext(StoreContext);
    

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const [correctProfile, setCorrectProfile] = useState<boolean>(false);
    
    const [username, setUsername] = useState<string>(localStorage.getItem('username') || '');
    const [email, setEmail] = useState<string>(localStorage.getItem('email') || '');
    const [region, setRegion] = useState<string>(localStorage.getItem('region') || '');
    const [city, setCity] = useState<string>(localStorage.getItem('city') || '');
    const [school, setSchool] = useState<string>(localStorage.getItem('school') || '');
    const [date_birthday, setDate_birthday] = useState<string>(localStorage.getItem('date_birthday') || '')



    

    const correctProfileHandler = () => {
        setCorrectProfile(true);
        if (correctProfile) {
            setCorrectProfile(false);
        }
    }





    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirst_name(e.target.value);
    }
    const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLast_name(e.target.value);
    }
    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const regionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegion(e.target.value);
    }
    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }
    const schoolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchool(e.target.value);
    }
    const date_birthdayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate_birthday(e.target.value);
    }



    const [renderChoosePhoto, setRenderChoosePhoto] = useState<boolean>(false);

    const renderChoosePhotoHandler = () => {
        setRenderChoosePhoto(!renderChoosePhoto);
    }


    interface newsType {
        title: string,
        id: number
    }

    const news: Array<newsType> = [
        {
            title:'Придумали, как сделать лампы накаливания более энергоэффективными и долговечными',
             id: 1
        },
         {
            title:  'В России разработали систему для настройки оптимальной работы головного мозга',
            id: 2
        },
          {
            title: 'Проблема процессоров Intel',
            id: 3
        }
    ];


    const {correct, points }= useAppSelector(state => state.correctSlice);


    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };




return (
    <>
        <section className={`${style.window} profile`}>
            {renderChoosePhoto && <AddingAvatar renderChoosePhotoHandler={renderChoosePhotoHandler} renderChoosePhoto={renderChoosePhoto} setPreview={setPreview} preview={preview}/>}
            <Button onClick={goBack} color='secondary' className={style.backBtn}><ArrowBackIcon/> Назад </Button>
            <div className={style.topSector}>
                <div className={style.userData}>
                    <h2> <span>Личные</span> данные</h2>
                    <div className={style.avatar}>
                    <Avatar src={preview} />  {correctProfile && <Tooltip followCursor title='Сменить аватар'><Fab style={{'width': 40, 'height': 30}} onClick={renderChoosePhotoHandler}><AddIcon /></Fab></Tooltip>}
                    </div>
                    <ul>
                        <li> <p>Имя:  {first_name  ? <span>{first_name}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="text" value={first_name} onChange={e => {nameHandler(e)}} name='name'/>}
                        </li>
                        <li> <p>Фамилия: {last_name ? <span>{last_name}</span> :  <Skeleton variant='text' width={180}  height={40}/>}</p>
                            {correctProfile && <input type="text" value={last_name} onChange={e => {lnameHandler(e)}} name='last_name'/>}
                        </li>
                        <li> <p>Пользователь: {username ? <span>{username}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="text" value={username} onChange={e => {usernameHandler(e)}} name='username'/>}
                        </li>
                        <li> <p>Почта: {email ? <span>{email}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="email" value={email} onChange={e => {emailHandler(e)}} name='email'/>}
                        </li>
                        <li> <p>Регион: {region ? <span>{region}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="region" value={region} onChange={e => {regionHandler(e)}} name='region'/>}
                        </li>
                        <li> <p>Город: {city ? <span>{city}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="city" value={city} onChange={e => {cityHandler(e)}} name='city'/>}
                        </li>
                        <li> <p>Школа: {school ? <span>{school}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="school" value={school} onChange={e => {schoolHandler(e)}} name='school'/>}
                        </li>
                        <li> <p>Дата рождения: {date_birthday ? <span>{date_birthday}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="date_birthday" value={date_birthday} onChange={e => {date_birthdayHandler(e)}} name='date_birthday'/>}
                        </li>
                    </ul>
                    <Button variant='outlined' color='secondary' onClick={correctProfileHandler} >{correctProfile ? <p>Подтвердить изменения</p> : <p>Редактировать профиль</p>}</Button>
                    <Button variant='contained' color='secondary' className={style.logoutBtn} onClick={handleLogout}>Выйти  <LogoutIcon /></Button>
                </div>
                <div className={style.resultInfo}>
                    {correct > 0 && <p className={style.result}>Правильные ответы за олимпиаду: <span>{correct}</span></p>}
                    {points > 0 && <p className={style.result}>Баллы за олимпиаду: <span>{points}</span></p>}
                </div>
                    
                    
                <div className={style.newsWin}>
                    <article>
                        НОВОСТИ
                    </article>
                    <img src={newsLine}/>
                    <div className={style.newItems}>
                        {news.map(item => {return (<div className={style.newItem} key={item.id}>
                            {item.title}
                        </div>)})}
                    </div>
                </div>
            </div>
        </section>
    </>
)
}



export default Profile;