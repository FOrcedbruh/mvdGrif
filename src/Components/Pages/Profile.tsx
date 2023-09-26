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







const Profile: React.FC = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const [correctProfile, setCorrectProfile] = useState<boolean>(false);
    const [nameValue, setNamevalue] = useState<string>('');
    const [lnameValue, setLnameValue] = useState<string>('');
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [regionValue, setRegionValue] = useState<string>('');
    const [cityValue, setCityValue] = useState<string>('');
    const [schoolValue, setSchoolValue] = useState<string>('');

    const [preview, setPreview] = useState<any>(null);

    const correctProfileHandler = () => {
        setCorrectProfile(true);
        if (correctProfile) {
            setCorrectProfile(false);

        }
    }



    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNamevalue(e.target.value);
    }
    const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLnameValue(e.target.value);
    }
    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameValue(e.target.value);
    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    }
    const regionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegionValue(e.target.value);
    }
    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.target.value);
    }
    const schoolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchoolValue(e.target.value);
    }



    const [renderChoosePhoto, setRenderChoosePhoto] = useState<boolean>(false);

    const renderChoosePhotoHandler = () => {
        setRenderChoosePhoto(!renderChoosePhoto);
    }


    

    /*const authAPI = {
        // профиль
        me(token: string) {
            // const token = localStorage.getItem('token')
            return instance.get('user/profile/', {
                headers: {
                    'Authorization': Bearer ${token}
                }
            });
        }
    }

    useEffect(() => {
        const token: string = '3ae7399c2fb938265eb2c46438e8f5862ac3f776';
        authAPI.me(token).then(res => res.data);
    })*/

    const news: Array<string> = [
        'Придумали, как сделать лампы накаливания более энергоэффективными и долговечными', 'В России разработали систему для настройки оптимальной работы головного мозга', 'Проблема процессоров Intel'
    ];




return (
    <>
        <section className={`${style.window} profile`}>
            {renderChoosePhoto && <AddingAvatar renderChoosePhotoHandler={renderChoosePhotoHandler} renderChoosePhoto={renderChoosePhoto} setPreview={setPreview} preview={preview}/>}
            <Button onClick={goBack} color='secondary' className={style.backBtn}><ArrowBackIcon/> Назад </Button>
            <div className={style.topSector}>
                <div className={style.userData}>
                    <h2> <span>Личные</span> данные</h2>
                    <div className={style.avatar}>
                    <Avatar src={preview} />  {correctProfile && <Fab style={{'width': 40, 'height': 30}} onClick={renderChoosePhotoHandler}><AddIcon /></Fab>}
                    </div>
                    
                    <ul>
                        <li> <p>Имя:  {nameValue ? <span>{nameValue}</span> : <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="text" value={nameValue} onChange={e => {nameHandler(e)}} name='name'/>}
                        </li>
                        <li> <p>Фамилия: {lnameValue ? <span>{lnameValue}</span> :  <Skeleton variant='text' width={180}  height={40}/>}</p>
                            {correctProfile && <input type="text" value={lnameValue} onChange={e => {lnameHandler(e)}} name='last_name'/>}
                        </li>
                        <li> <p>Пользователь: {usernameValue} {!usernameValue && <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="text" value={usernameValue} onChange={e => {usernameHandler(e)}} name='username'/>}
                        </li>
                        <li> <p>Почта: {emailValue} {!emailValue && <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="email" value={emailValue} onChange={e => {emailHandler(e)}} name='email'/>}
                        </li>
                        <li> <p>Регион: {regionValue} {!regionValue && <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="region" value={regionValue} onChange={e => {regionHandler(e)}} name='region'/>}
                        </li>
                        <li> <p>Город: {cityValue} {!cityValue && <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="city" value={cityValue} onChange={e => {cityHandler(e)}} name='city'/>}
                        </li>
                        <li> <p>Школа: {schoolValue} {!schoolValue && <Skeleton variant='text' width={180} height={40}/>}</p>
                            {correctProfile && <input type="school" value={schoolValue} onChange={e => {schoolHandler(e)}} name='city'/>}
                        </li>
                        <li>Дата рождения: 

                        </li>
                    </ul>
                    <Button variant='outlined' color='secondary' onClick={correctProfileHandler} >{correctProfile ? <p>Подтвердить изменения</p> : <p>Редактировать профиль</p>}</Button>
                </div>
                <div className={style.newsWin}>
                    <article>
                        НОВОСТИ
                    </article>
                    <img src={newsLine}/>
                    <div className={style.newItems}>
                        {news.map(item => {return (<div className={style.newItem}>
                            {item}
                        </div>)})}
                    </div>
                </div>
            </div>
        </section>
    </>
)
}



export default Profile;