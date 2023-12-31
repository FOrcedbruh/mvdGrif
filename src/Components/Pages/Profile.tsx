import style from './../../styles/ComponentStyles/Profile.module.css';
import newsLine from './../../images/newsLine.svg';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import AddingAvatar from '../AddingAvatar';
import { Snackbar, Alert, Fab, Avatar} from '@mui/material';
import { useContext } from 'react';
import { StoreContext } from '../../contexts/storeContext';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from '../../hooks/reducerHooks';
import { resetFullAccount, setFullAccount } from '../../Store/reducers/AccountStatusSlice';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';





const Profile: React.FC = () => {

    const dispatch = useAppDispatch();

    // берем данные из context и reduxStore

    const {correct, points } = useAppSelector(state => state.correctSlice);

    const {first_name, last_name, email, username, preview, setPreview} = useContext(StoreContext);


    const { fullAccount } = useAppSelector(state => state.AccountStatusSlice);

    const { correctOfLastTest, nameOfLastTest } = useAppSelector(state => state.TestsResultSlice);



    // навигация

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    const [correctProfile, setCorrectProfile] = useState<boolean>(false);




    

    const correctProfileHandler = () => {
        setCorrectProfile(true);
        if (correctProfile) {
            setCorrectProfile(false);
        }
    }





   



    const [renderChoosePhoto, setRenderChoosePhoto] = useState<boolean>(false);

    const renderChoosePhotoHandler = () => {
        setRenderChoosePhoto(!renderChoosePhoto);
    }





    


    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        dispatch(resetFullAccount());
    };
    console.log(fullAccount);




return (
    <>
        <section className={`${style.window} profile`}>
            {renderChoosePhoto && <AddingAvatar renderChoosePhotoHandler={renderChoosePhotoHandler} renderChoosePhoto={renderChoosePhoto} setPreview={setPreview} preview={preview}/>}
            <Button onClick={goBack} color='secondary' className={style.backBtn}><ArrowBackIcon/> Назад </Button>
            <h1 className={style.head}>Профиль</h1>
            <div className={style.topSector}>
                
                <div className={style.userData}>
                    <h2> <span>Данные</span> аккаунта</h2>
                    <div className={style.avatar}>
                    <Avatar src={preview} />  {correctProfile && <Tooltip followCursor title='Сменить аватар'><Fab style={{'width': 40, 'height': 30}} onClick={renderChoosePhotoHandler}><AddIcon /></Fab></Tooltip>}
                    </div>
                        <ul>
                            <li><p><h5>Login:</h5> {username}</p></li>
                            <li><p><h5>Почта:</h5> {email}</p></li>
                            {first_name && <><li><p><h5>Вы:</h5>{last_name} {first_name}</p></li></>}
                        </ul>
                    <Button variant='outlined' color='secondary' onClick={correctProfileHandler} >{correctProfile ? <p>Подтвердить изменения</p> : <p>Редактировать профиль</p>}</Button>
                    <Button variant='contained' color='secondary' className={style.logoutBtn} onClick={handleLogout}>Выйти  <LogoutIcon /></Button>
                </div>
                {(correct > 0 && points > 0) && <div className={style.resultInfo}>
                    <h2>Ваши результаты за олимпиаду</h2>
                    <p className={style.result}><DoneIcon color='secondary'/>Правильные ответы: <span>{correct}</span></p>
                    <p className={style.result}><StarIcon color='secondary'/>Баллы: <span>{points}</span></p>
                </div>}
              
            </div>
            {nameOfLastTest != '' && <div className={style.infoOfLastTest}>
                <p>Последний раз вы прошли тест по теме "{nameOfLastTest}" с количеством правильных ответов: <span style={{'color': 'blueviolet'}}>{correctOfLastTest}</span> </p>
            </div>}
        </section>
        <Snackbar open={!fullAccount}>
                <Alert severity='error'>
                    <p>Ваш аккаунт не полный! <Tooltip title='Перейти' placement='top'><Link to='/дополнение_аккаунта'>Дополните его</Link></Tooltip> , для доступа к олимпиаде.</p>
                </Alert>
        </Snackbar>
    </>
)
}



export default Profile;