import style from './../../styles/ComponentStyles/OlimpicPreview.module.css';
import Grif from './../../images/testGrif.svg';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../contexts/storeContext';
import { Snackbar, Alert, Tooltip } from '@mui/material';
import { useAppDispatch } from '../../hooks/reducerHooks';
import { reset } from '../../Store/reducers/correctSlice';


const OlimpicPreview: React.FC = () => {


    const dispatch = useAppDispatch();

    const [open, setOpen] = useState<boolean>(false);

    const onClick = () => {
        setOpen(true);
        dispatch(reset(0))
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
    }

    const {showProfile} = useContext(StoreContext);

    const [warningBar, setWarningBar] = useState<boolean>(true);

    const WarningHandleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

        setWarningBar(false);
    }


    
    return (
        <section className={style.window}>
            <img src={Grif}/>
            {showProfile ? <Link to='/Тесты олимпиады'><Button variant='contained' color='secondary' className={style.goToOlimpicsBtn} onClick={() => dispatch(reset(0))}>Перейти к олимпиаде <ArrowOutwardIcon /></Button></Link>
             : <Button variant='contained' color='secondary' className={style.goToOlimpicsBtn} onClick={onClick}>Перейти к олимпиаде <ArrowOutwardIcon /></Button>}
             <Snackbar open={open}  onClose={handleClose} autoHideDuration={4000}>
                <Alert severity='error'>
                    Для участия в олимпиаде необходимо войти в <Tooltip title='Перейти к регистрации' followCursor><Link to='/регистрация' style={{'color': 'blueviolet'}}>аккаунт</Link></Tooltip>!
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