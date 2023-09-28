import style from './../../styles/ComponentStyles/Home.module.css';
import gerb from './../../images/gerb.svg';
import line from './../../images/line.svg';
import CarouselWin from '../Carousel';
import { useState, useEffect } from 'react';
import mainGrif from './../../images/main-grif.svg';




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
                        ГРИФ.
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
            <Info />
            <CarouselWin />
        </section>
    )
}



export default Home;