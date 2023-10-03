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
import TextReader from "./Pages/TextReader";
import InstructionPage from "./Pages/InstructionPage";





const App: React.FC = () => {
    

    // progressBar

    const [percent, setPercent] = useState<number>(0);

    const progress: any = () => {
        const windowScroll: number = window.scrollY;
        const height: number = 2400;
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


    return (
        <>
            <StoreContext.Provider value={{first_name, last_name, setFirst_name, setLast_name, showProfile, setShowProfile, preview, setPreview, snack, setSnack, handleClose}}>
                <section className="wrapper">
                    <div className='progressBar' style={{width: `${percent}%`}}></div>
                            <Routes>
                                <Route  path="/" element={<Layout />}>
                                    <Route path="/" index element={<Home />}/>
                                    <Route path="/Инструкция к олимпиаде" element={<InstructionPage />}/>
                                </Route>
                                <Route path="/PDFReader" element={<TextReader />}/>
                                <Route path="/Профиль" element={showProfile ? <Profile /> : <Login/>} />
                                <Route path='/Войти' element={<Login showProfile={showProfile} setShowProfile={setShowProfile}/>}/>
                                <Route path='/Регистрация' element={<Register />}/>
                                <Route path="Тесты/:title" element={<Quiz />}/>
                                <Route path='/Тесты' element={<TestCategories />}/>
                            </Routes>
                        <TopButton />
                </section>
            </StoreContext.Provider>
        </>
    )
}


export default App;