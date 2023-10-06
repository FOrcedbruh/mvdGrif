import style from './../styles/ComponentStyles/Layout.module.css';
import { NavLink, Link, Outlet } from 'react-router-dom'
import gerb from './../images/logo-gerb.svg';
import grif from './../images/logo-grif.svg';
import line from './../images/logo-line.svg';
import React, { useState, MouseEvent } from 'react';
import ThemeThumb from './ThemeThumb';
import { useMediaQuery } from 'react-responsive';
import { LayoutType } from '../types/layoutType';
import MenuIcon from '@mui/icons-material/Menu';
import { StoreContext } from '../contexts/storeContext';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { Suspense } from 'react';
import Tooltip from '@mui/material/Tooltip';
import FooterGerb from './../images/FooterGerb.svg';
import { Loader } from './Loader';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



const Home: React.FC = () => {

    const {showProfile, snack, setSnack} = useContext(StoreContext);

    const snackHandler = () => {
        setSnack(true)
    }

    

    return (
        <ul className={style.innerUl}>
            <li><Link to='/'>Общая информация</Link></li>
            <li><Link to='/документы'>Документы</Link></li>
            <li onClick={!showProfile ? snackHandler : () => {console.log('profile is showed')}}><Link to='/профиль'>Профиль</Link></li>
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
                <Link to='/инструкция к олимпиаде'>Инструкция по прохождению тестовых заданий</Link>
            </li>
            <li>
                <Link to='/'>Рекомендуемая литература для подготовки</Link>
            </li>
        </ul>
    )
}


const LayoutDesktop: React.FC<LayoutType> = ({gap}) => {

    const {last_name, first_name, showProfile, preview} = useContext(StoreContext);


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
                {showProfile ?
                    <div className={style.profileInf}>
                        <Tooltip title='Перейти к профилю'><NavLink to='/профиль' className={style.profileLink}>{first_name} {last_name}</NavLink></Tooltip> <Avatar src={preview}/>
                    </div>
                 : 
                <div className={style.profile}>
                    <Link to='войти'>Войти</Link>
                    <Link to='регистрация'><span>Регистрация</span></Link>
                </div>}
            </header>
            <main className='container'>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <section className={style.footerAura}>
                <footer className={style.footer}>
                    <img src={FooterGerb}/>
                    <ul>
                        <li><h4>Документы</h4></li>
                        <li><Link to='/PDFReader'>Согласие на обработку персональных данных</Link></li>
                        <li><Link to='/PDFReader'>Положение</Link></li>
                        <li><Link to='/PDFReader'>Регламент</Link></li>
                    </ul>
                    <ul>
                        <li><h4>Контакты</h4></li>
                        <li>Почта: <a href="mailto: olimpiada.mosu@mail.ru">olimpiada.mosu@mail.ru</a></li>
                        <li></li>
                    </ul>
                </footer>
            </section>
            
        </>
    )
}



const LayoutMobile: React.FC = () => {

    const {showProfile} = useContext(StoreContext);

    

    // Navigation panel Drawer

    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };


        interface LinksType {
            text: string,
            subText?: Array<string>,
        }

        const Links: Array<LinksType> = [
            {
                text: 'Главная',
                subText: ['Общая информация', 'Документы', 'Профиль']
            },
            {
                text: 'Материалы',
                subText: ['Тесты', 'Инструкция к олимпиаде', 'Рекомендуемая литература']
            },
            {
                text: 'Олимпиада',
            },
            {
                text: 'Поддержка',
            }
        ]

        const list = (anchor: Anchor) => (
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
              role="presentation"
              
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {Links.map((text, index) => (
                    <Accordion style={{'width': '100%'}} key={text.text} >
                        <AccordionSummary>
                            <ListItem disablePadding>
                                <ListItemButton style={{'width': '100%'}}>
                                    <ListItemIcon>
                                        {<OpenInNewIcon />}
                                    </ListItemIcon>
                                    {index === 0 ? <Link to='/' onClick={toggleDrawer(anchor, false)}>Главная</Link> : <Link to={`/${text.text}`} onClick={toggleDrawer(anchor, false)}>{text.text}</Link>}
                                </ListItemButton>
                                <ListItemText />
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails style={{'display': 'flex', 'gap': 20, 'flexDirection': 'column'}}>
                                {text.subText?.map((details) => (
                                    <ListItem key={details} disablePadding>
                                        <Link to={`/${details}`} onClick={toggleDrawer(anchor, false)}>{details}</Link>
                                    </ListItem>
                                ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
               {!showProfile && <ListItem style={{'marginTop': 40}}>
                    <div className={style.profile} id={style.mobileProfile}>
                        <Link to='войти'>Войти</Link>
                        <Link to='регистрация'><span>Регистрация</span></Link>
                    </div>
                </ListItem>}
              </List>
              <Divider />
            </Box>
          );

    return (
        <>
            <header className={`${style.window} header`}>
                <div>
                    {(['top'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} color='secondary'><MenuIcon fontSize='large'/></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                    ))}
                </div>
                <div className={style.logo}>
                    <img src={gerb}/>
                    <img src={line}/>
                    <img src={grif}/>
                </div>
                <ThemeThumb />
            </header>
            
            <main className='container'>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
            </main>
            <section className={style.footerAura}>
                <footer className={style.footer}>
                    <img src={FooterGerb}/>
                    <ul>
                        <li><h4>Документы</h4></li>
                        <li><Link to='/PDFReader'>Согласие на обработку персональных данных</Link></li>
                        <li><Link to='/PDFReader'>Положение</Link></li>
                        <li><Link to='/PDFReader'>Регламент</Link></li>
                    </ul>
                    <ul>
                        <li><h4>Контакты</h4></li>
                        <li>Почта: <a href="mailto: olimpiada.mosu@mail.ru">olimpiada.mosu@mail.ru</a></li>
                        <li></li>
                    </ul>
                </footer>
            </section>
        </>
    )
}


const Layout: React.FC = () => {


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
     
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px) and (min-width: 900px)"
      });
     
      const isMobile = useMediaQuery({
        query: "(max-width: 900px)"
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