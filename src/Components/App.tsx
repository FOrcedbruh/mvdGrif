import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { TestCategories }from "./Pages/TestCategoties";
import Quiz from "./Quiz";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import TopButton from "./TopButton";
import Profile from "./Pages/Profile";
import { StoreContext } from "../contexts/storeContext";






const App: React.FC = () => {
    

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

    const [first_name, setFirst_name] = useState<string>(localStorage.getItem('first_name') || 'Ilya');
    const [last_name, setLast_name] = useState<string>(localStorage.getItem('last_name') || 'Chaplya');
    
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

    // иконка профиля

    const [preview, setPreview] = useState<any>(null);


    return (
        <>
            <StoreContext.Provider value={{first_name, last_name, setFirst_name, setLast_name, showProfile, setShowProfile, preview, setPreview}}>
                <section className="wrapper">
                    <div className='progressBar' style={{width: `${percent}%`}}></div>
                            <Routes>
                                <Route  path="/" element={<Layout />}>
                                    <Route path='/Тесты' element={<TestCategories />}/>
                                    <Route path="/" index element={<Home />}/>
                                </Route>
                                <Route path="/Профиль" element={showProfile ? <Profile /> : <Login/>} />
                                <Route path='/Войти' element={<Login showProfile={showProfile} setShowProfile={setShowProfile}/>}/>
                                <Route path='/Регистрация' element={<Register />}/>
                                <Route path="Тесты/:title" element={<Quiz />}/>
                            </Routes>
                        <TopButton />
                </section>
            </StoreContext.Provider>
        </>
    )
}


export default App;