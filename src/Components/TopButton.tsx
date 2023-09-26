import { useState, useEffect} from 'react';


const TopButton: React.FC = () => {

    let [scroll, setSCroll] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    const scrollHandler: any = () => {
        const scrollY = window.scrollY;
        setSCroll(scroll = scrollY);
        if (scroll > 800) {
            setActive(true);
        }
        else if (scroll < 300) {
            setActive(false);
        }
    }

    const topHandler: any = () => {
        window.scrollTo(0, 0);
        setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {window.removeEventListener('scroll', scrollHandler)};
    })


    return (
        <button className={`topBtn ${active ? "activeTopBtn" : ""}`} onClick={() => {topHandler()}}>
           Прокрутить вверх
        </button>
    )
}


export default TopButton;