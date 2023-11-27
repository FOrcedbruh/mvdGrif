import style from './../../styles/ComponentStyles/OlimpicPreview.module.css';
import Grif from './../../images/testGrif.svg';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import {  useState, useLayoutEffect, useContext, useEffect } from 'react';
import { Snackbar, Alert, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reducerHooks';
import { allReset } from '../../Store/reducers/correctSlice';
import { setFullAccount } from '../../Store/reducers/AccountStatusSlice';
import { StoreContext } from '../../contexts/storeContext';
import { instance } from '../AuthorizationData';


const OlimpicPreview: React.FC = () => {

    /*const [Questions, setQuestions] = useState([]);

    useEffect(() => {
        instance.get('task/list/').then(res => {
            setQuestions(res.data.results);
            console.log(res.data);
        });
    }, []);*/

    const {username, email} = useContext(StoreContext);

    const { fullAccount } = useAppSelector(state => state.AccountStatusSlice);

    const dispatch = useAppDispatch();

    const [open, setOpen] = useState<boolean>(false);

    const onClick = () => {
        setOpen(true);
        dispatch(allReset(0))
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
    }

    const [warningBar, setWarningBar] = useState<boolean>(true);

    const WarningHandleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

        setWarningBar(false);
    }



    
    return (
        <section className={`${style.window} olimpicsPreviewWindow`}>
            <h1 className={style.head}>Олимпиада</h1>
            <img src={Grif}/>
            {fullAccount ? <Link to='/Тесты олимпиады'><Button variant='contained' color='secondary' className={style.goToOlimpicsBtn} onClick={() => dispatch(allReset(0))}>Перейти к олимпиаде <ArrowOutwardIcon /></Button></Link>
             : <Tooltip title='необходим полный аккаунт' placement='top' arrow><Button variant='contained' color='secondary' className={style.goToOlimpicsBtn} onClick={onClick}>Перейти к олимпиаде <ArrowOutwardIcon /></Button></Tooltip>}
             <Snackbar open={open}  onClose={handleClose} autoHideDuration={4000}>
                <Alert severity='error'>
                    Для участия в олимпиаде необходимо иметь полный  <Tooltip title='Перейти к регистрации' followCursor><Link to='/профиль' style={{'color': 'blueviolet'}}>аккаунт</Link></Tooltip>!
                </Alert>
             </Snackbar>
             <Snackbar open={warningBar} onClose={WarningHandleClose} autoHideDuration={5000}>
                <Alert severity='warning'>
                    При решении тестов не перезагружайте страницу, есть вероятность утери данных о ваших ответах!
                </Alert>
             </Snackbar>
        </section>
    )
}




export default OlimpicPreview;