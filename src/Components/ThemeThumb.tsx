import { useTheme } from "../hooks/useTheme";
import { useState } from 'react';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const ThemeThumb: React.FC = () => {


    const {theme, setTheme} = useTheme();
    const [mode, setMode] = useState<boolean>(false);

    const modeHandle = () => {
        setMode(!mode);
        let modeStr: string = JSON.stringify(mode);
        localStorage.setItem('mode', modeStr);
    }

    const handleChange = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    return (
        <>
            <section>
                <Button variant="contained" color="secondary" onClick={() => {handleChange(); modeHandle()}}>{!mode ? <LightModeIcon /> : <DarkModeIcon />}</Button>
            </section>
        </>
    )
}


export default ThemeThumb;