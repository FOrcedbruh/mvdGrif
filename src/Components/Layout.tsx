import style from './../styles/ComponentStyles/Layout.module.css';
import { NavLink, Link } from 'react-router-dom'
import gerb from './../images/logo-gerb.svg';
import grif from './../images/logo-grif.svg';
import line from './../images/logo-line.svg';
import React, { useState, MouseEvent } from 'react';
import ThemeThumb from './ThemeThumb';
import { useMediaQuery } from 'react-responsive';
import { LayoutType } from '../types/layoutType';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Home: React.FC = () => {
    return (
        <ul className={style.innerUl}>
            <li><Link to='/'>Общая информация</Link></li>
            <li><Link to='/'>Документы</Link></li>
            <li><Link to='/'>График</Link></li>
            <li><Link to='/'>Галерея</Link></li>
            <li><Link to='/профиль'>Профиль</Link></li>
            <li><Link to='/'>Контакты</Link></li>
            

        </ul>
    )
}

const Materials: React.FC = () => {
    return (
        <ul className={style.innerUl}>
            <li>
                <Link to='/тесты'>Тестовые задания</Link>
            </li>
            <li>
                <Link to='/'>Работы</Link>
            </li>
            <li>
                <Link to='/'>Инструкция по прохождению тестовых заданий</Link>
            </li>
            <li>
                <Link to='/'>Рекомендуемая литература для подготовки</Link>
            </li>
        </ul>
    )
}


const LayoutDesktop: React.FC<LayoutType> = ({gap}) => {

    const [home, setHome] = useState<boolean>(false);
    const [materials, setMaterials] = useState<boolean>(false);

    const homeHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(true);
    }
    const homeOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(false);
    }
    const matHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(true);
    }
    const matOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(false);
    }

    return (
        <>
            <header className={`${style.window} header`}>
                <div className={style.logo}>
                    <img src={gerb}/>
                    <img src={line}/>
                    <img src={grif}/>
                </div>
                <nav className='nav'>
                    <ul className={style.main} style={{'gap': gap}}>
                        <li onMouseOver={homeHandler} onMouseOut={homeOutHandler}>
                            <NavLink to='/' >Главная</NavLink>
                        {home  && <Home/>}
                        </li>
                        <li onMouseOver={matHandler} onMouseOut={matOutHandler}>
                            <NavLink to='/материалы'>Материалы</NavLink>
                            {materials && <Materials />}
                        </li>
                        <li>
                            <NavLink to='/олимпиада'>Олимпиада</NavLink>
                        </li>
                        <li>
                            <NavLink to='/поддержка'>Поддержка</NavLink>
                        </li>
                    </ul>
                </nav>
                <ThemeThumb />
                <div className={style.profile}>
                    <Link to='войти'>Войти</Link>
                    <Link to='регистрация'><span>Регистрация</span></Link>
                </div>
            </header>
        </>
    )
}


const LayoutMobile: React.FC = () => {

    const [home, setHome] = useState<boolean>(false);
    const [materials, setMaterials] = useState<boolean>(false);

    const [nav, setNav] = useState<boolean>(false);

    const [menuCross, setMenuCross] = useState<boolean>(false);

    const homeHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(true);
    }
    const homeOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(false);
    }
    const matHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(true);
    }
    const matOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(false);
    }

    const menuHandler = () => {
        setNav(!nav);
        setMenuCross(!menuCross);
    }

    return (
        <>
            <header className={`${style.window} header`}>
                <div className={style.menu} onClick={menuHandler}>{menuCross ? <CloseIcon color='secondary'/> : <MenuIcon color='secondary'/>}</div>
                <div className={style.logo}>
                    <img src={gerb}/>
                    <img src={line}/>
                    <img src={grif}/>
                </div>
                <ThemeThumb />
                <div className={style.profile}>
                    <Link to='войти'>Войти</Link>
                    <Link to='регистрация'><span>Регистрация</span></Link>
                </div>
            </header>
            {nav && <nav className={style.mobileNav}>
                        <ul className={style.main} style={{'flexDirection': 'column'}}>
                            <li onMouseOver={homeHandler} onMouseOut={homeOutHandler}>
                                <NavLink to='/' >Главная</NavLink>
                            {home  && <Home/>}
                            </li>
                            <li onMouseOver={matHandler} onMouseOut={matOutHandler}>
                                <NavLink to='/материалы'>Материалы</NavLink>
                                {materials && <Materials />}
                            </li>
                            <li>
                                <NavLink to='/олимпиада'>Олимпиада</NavLink>
                            </li>
                            <li>
                                <NavLink to='/поддержка'>Поддержка</NavLink>
                            </li>
                        </ul>
                    </nav>}
        </>
    )
}


const Layout: React.FC = () => {


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
     
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px) and (min-width: 787px)"
      });
     
      const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
      });

    

    

    
    return (
        <>
            {isDesktop && <LayoutDesktop gap={60}/>}
            {isTablet && <LayoutDesktop gap={25}/>}
            {isMobile && <LayoutMobile />}
        </>
        
    )
}




export default Layout;