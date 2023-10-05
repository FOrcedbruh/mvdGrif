import style from './../../styles/ComponentStyles/OlimpicPreview.module.css';
import Grif from './../../images/testGrif.svg';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const OlimpicPreview: React.FC = () => {



    return (
        <section className={style.window}>
            <img src={Grif}/>
            <Link to='/Тесты олимпиады'><Button variant='contained' color='secondary' className={style.goToOlimpicsBtn}>Перейти к олимпиаде <ArrowOutwardIcon /></Button></Link>
        </section>
    )
}




export default OlimpicPreview;