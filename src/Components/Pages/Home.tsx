import style from './../../styles/ComponentStyles/Home.module.css';
import gerb from './../../images/gerb.svg';
import line from './../../images/line.svg';
import CarouselWin from '../Carousel';
import { useState, useEffect, useContext } from 'react';
import mainGrif from './../../images/main-grif.svg';
import { Link } from 'react-router-dom';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import { StoreContext } from '../../contexts/storeContext';
import { useAppSelector } from '../../hooks/reducerHooks';
import { Tooltip } from '@mui/material';



const Info: React.FC = () => {
    return (
        <section className={style.infoWin}>
            <div className={style.top}>
                <img src={gerb}/>
                <p>МОСКОВСКИЙ УНИВЕРСИТЕТ МИНИСТЕРСТВА ВНУТРЕННИХ ДЕЛ РОССИЙСКОЙ ФЕДЕРАЦИИ ИМЕНИ В.Я. КИКОТЯ</p>
                <img src={line}/>
                <h3>Кандидатам на обучение</h3>
            </div>
            <div className={style.list}>
                <h3>
                    Абитуриентам
                </h3>
                <ul>
                    <li>День открытых дверей в режиме онлайн</li>
                    <li>Порядок оформления документов для поступления в Московский университет МВД России имени В.Я. Кикотя</li>
                    <li>Профессионально-психологический отбор</li>
                    <li>Нормативные акты, регламентирующие порядок поступления в Московский университет МВД России имени В.Я. Кикотя</li>
                    <li>Подготовительные курсы</li>
                    <li>Информация для поступающих в адъюнктуру</li>
                    <li>Информация о проведении вступительных испытаний и дополнительных вступительных испытаний с использованием дистанционных технологий</li>
                    <li>Методические рекомендации по проведению вступительных испытаний (в форме тестирования) по программам высшего образования по заочной форме обучения с использованием дистанционных образовательных технологий</li>
                    <li>Программы бакалавриата, программы специалитета, программы магистратуры на 2024 год</li>
                </ul>
            </div>
        </section>
    )
}

const OlimpicsBtn: React.FC = () => {

    const {showProfile} = useContext(StoreContext);
    const {fullAccount} = useAppSelector(state => state.AccountStatusSlice);

    const [animBtn, setAnimBtn] = useState<boolean>(false);

    const animBtnHandle = () => {
        setAnimBtn(true);
    }

    useEffect(() => {
        setTimeout(animBtnHandle, 400);
    }, [])


    return (
        <section className={style.OlimpicsBtn}>
            <h3>Начните проходить олимпиаду прямо сейчас</h3>
            <Tooltip arrow title={`${!showProfile ? 'Сначала войдите или создайте аккаунт' : ''}`}  placement='right'><Link to={`${!showProfile && '/войти' || !fullAccount && '/олимпиада'}`}><button className={`${animBtn ? `${style.view}` : ''}`}><ImportContactsRoundedIcon style={{'color': '#fff'}}/>   <p>Перейти к олимпиаде</p></button></Link></Tooltip>
        </section>
    )
}

const Main: React.FC = () => {

    // анимация грифа

    const [activeGrif, setActiveGrif] = useState<boolean>(false);

    const scrollHandler: any = () => {
        if(window.scrollY > 50) {
            setActiveGrif(true);
        }
        else if (window.scrollY < 300) {
            setActiveGrif(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);


        return () => {window.removeEventListener('scroll', scrollHandler)}
    }, [])

    

    return (
        <>
        <section className={style.main}>
            <div className={`${style.welcome}`}>
                <p>
                    <span>
                       Гриф.
                    </span>
                    первый полностью  бесплатный ресурс повышения уровня знаний в сфере IT.
                </p>
            </div>
            <img src={mainGrif} className={`${style.mainGrif} ${activeGrif ? `${style.activeMainGrif}` : ''}`}/>
        </section>
            
        
        </>
    )
}



const Home: React.FC = () => {
    


    return (
        <section className={`${style.window} homeWindow`}>
            <Main />
            <OlimpicsBtn />
            <Info />
            <CarouselWin />
        </section>
    )
}



export default Home;