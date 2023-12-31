import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { StoreContext } from "../contexts/storeContext";
import TopButton from "./TopButton";
import Layout from "./Layout";
import { Loader } from "./Loader";
import { useMediaQuery } from 'react-responsive';

import { setFullAccount } from "../Store/reducers/AccountStatusSlice";
import { useAppDispatch } from "../hooks/reducerHooks";

const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const TestCategories = lazy(() => import("./Pages/TestCategoties"));
const Quiz = lazy(() => import("./Quiz"));
const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));
const TextReader = lazy(() => import("./Pages/TextReader"));
const InstructionPage = lazy(() => import("./Pages/InstructionPage"));
const ContactsPage = lazy(() => import("./Pages/ContactsPage"));
const DocumentsPage = lazy(() => import("./Pages/DocumentsPage"));
const OlimpicPreview = lazy(() => import("./Pages/OlimpicPreview"));
const Olimpics = lazy(() => import("./Pages/Olimpics"));
const MaterialsPage = lazy(() => import("./Pages/MaterialsPage"));
const FullAccount = lazy(() => import('./Pages/FullAccount'))


const App: React.FC = () => {

    const dispatch = useAppDispatch();
    

    // progressBar

    const [percent, setPercent] = useState<number>(0);

    const progress: any = () => {
        const windowScroll: number = window.scrollY;
        const height: number = 2500;
        setPercent(percent + (windowScroll / height) * 100);
    }

    

    // отображение в header username и email

    const [username, setUsername] = useState<string>(localStorage.getItem('username') || '');
    const [email, setEmail] = useState<string>(localStorage.getItem('email') || '');
    const [first_name, setFirst_name] = useState<string>(localStorage.getItem('first_name') || '');
    const [last_name, setLast_name] = useState<string>(localStorage.getItem('last_name') || '');


    useEffect(() => {
        if (first_name && last_name) {
            dispatch(setFullAccount());
        }
        window.addEventListener('scroll', progress);

        return () => {window.removeEventListener('scroll', progress)};
    }, []);
    
    // состоние для логики рендера профиля

    const [showProfile, setShowProfile] = useState<boolean>(false);

    useEffect(() => {
        if (username && email) {
            setShowProfile(true)
        }

        else if (!username || !email) {
            setShowProfile(false);
        }
    })

    // иконка профиля

    const [preview, setPreview] = useState<any>(null);

    // snackbar 


    const [snack, setSnack] = useState<boolean>(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

        setSnack(false);
    }

    // responsive 

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
     
      const isTablet = useMediaQuery({
        query: "(max-width: 1224px) and (min-width: 787px)"
      });


    return (
        <>
            <StoreContext.Provider value={{first_name, last_name, username, email, setEmail, setUsername, showProfile, setShowProfile, preview, setPreview, snack, setSnack, handleClose}}>
                <section className="wrapper">
                    <div className='progressBar' style={{width: `${percent}%`}}></div>
                            <Routes>
                                <Route  path="/" element={<Layout />}>
                                    <Route path="/" index element={<Home />}/>
                                    <Route path="/Инструкция к олимпиаде" element={<InstructionPage />}/>
                                    <Route path="/Поддержка" element={<Suspense fallback={<Loader />}><ContactsPage /></Suspense>}/>
                                    <Route path="/Документы" element={<Suspense fallback={<Loader />}><DocumentsPage /></Suspense>}/>
                                    <Route path="/Олимпиада" element={<Suspense fallback={<Loader />}><OlimpicPreview /></Suspense>}/>
                                    <Route path="/Материалы" element={<Suspense fallback={<Loader />}><MaterialsPage /></Suspense>}/>
                                </Route>
                                <Route path="/Дополнение_аккаунта" element={<Suspense fallback={<Loader />}><FullAccount /></Suspense>}/>
                                <Route path="/Тесты олимпиады" element={<Suspense fallback={<Loader />}><Olimpics /></Suspense>}/>
                                <Route path="/Документы/:id" element={<Suspense fallback={<Loader />}><TextReader /></Suspense>}/>
                                <Route path="/Профиль" element={showProfile ? <Suspense fallback={<Loader />}><Profile /></Suspense> : <Suspense fallback={<Loader />}><Login/></Suspense>} />
                                <Route path='/Войти' element={<Suspense fallback={<Loader />}><Login showProfile={showProfile} setShowProfile={setShowProfile}/></Suspense>}/>
                                <Route path='/Регистрация' element={<Suspense fallback={<Loader />}><Register /></Suspense>}/>
                                <Route path="Тесты/:testID" element={<Suspense fallback={<Loader />}><Quiz /></Suspense>}/>
                                <Route path='/Тесты' element={<Suspense fallback={<Loader />}>{showProfile ? <TestCategories /> : <Login />}</Suspense>}/>
                            </Routes>
                        {(isDesktop || isTablet)  && <TopButton />}
                </section>
            </StoreContext.Provider>
        </>
    )
}


export default App;