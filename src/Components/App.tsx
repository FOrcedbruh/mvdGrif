import { Route, Link, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Register from "./Pages/Register";
import mainGrif from './../images/main-grif.svg';
import Login from "./Pages/Login";
import { TestCategories }from "./Pages/TestCategoties";
import Quiz from "./Quiz";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import TopButton from "./TopButton";
import { useInView }from 'react-intersection-observer'
import Profile from "./Pages/Profile";
import { StoreContext } from "../contexts/storeContext";


const Main: React.FC = () => {

    const {ref, inView, entry} = useInView({
        threshold: 0.3
    })

    return (
        <div className={`welcome ${inView ? "view" : ""}`} ref={ref}>
            <p>
                <span>
                    ГРИФ.
                </span>
                первый полностью  бесплатный ресурс повышения уровня знаний в сфере IT. 
            </p>
        </div>
    )
}



const App: React.FC = () => {

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
    
    // progressBar

    const [percent, setPercent] = useState<number>(0);

    const progress: any = () => {
        const windowScroll: number = window.scrollY;
        const height: number = 2398;
        setPercent(percent + (windowScroll / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', progress);


        return () => {window.removeEventListener('scroll', progress)};
    }, []);


    // отображение в header имени и фамилии

    const [first_name, setFirst_name] = useState<string>(localStorage.getItem('first_name') || '');
    const [last_name, setLast_name] = useState<string>(localStorage.getItem('last_name') || '');
    
    // состоние для логики рендера профиля

    const [showProfile, setShowProfile] = useState<boolean>(false);

    useEffect(() => {
        if (first_name && last_name) {
            setShowProfile(true)
        }
        else if (!first_name && !last_name) {
            setShowProfile(false);
        }
    })

    



    return (
        <>
        <StoreContext.Provider value={{first_name, last_name, setFirst_name, setLast_name, showProfile, setShowProfile}}>
            <section className="wrapper">
                    <div className="progressBar" style={{width: `${percent}%`}}></div>
                    <Layout />
                    <main className="container">
                        <Main />
                        <img src={mainGrif} className={`mainGrif ${activeGrif ? 'activeMainGrif' : ''}`}/>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/Профиль" element={showProfile ? <Profile /> : <Login/>} />
                            <Route path='/Войти' element={<Login showProfile={showProfile} setShowProfile={setShowProfile}/>}/>
                            <Route path='/Тесты' element={<TestCategories />}/>
                            <Route path="Тесты/:title" element={<Quiz />}/>
                            <Route path='/Регистрация' element={<Register />}/>
                        </Routes>
                    </main>
                    <TopButton />
                </section>
        </StoreContext.Provider>
            
        </>
    )
}


export default App;