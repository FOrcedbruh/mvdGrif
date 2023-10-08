import { useLayoutEffect, useState } from "react";



const useTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme])



    return {theme, setTheme}
}



export {useTheme};