import { accept } from "../../projectFiles/accept";
import style from './../../styles/ComponentStyles/TextReader.module.css';
import { Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const TextReader: React.FC = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className={`${style.window} textReader`}>
            <Button color="secondary" onClick={goBack} className={style.backBtn}><ArrowBack/> Назад</Button>
            <h1>{accept.title}</h1>
            <article className={style.article}>
                <p>{accept.article}</p>
            </article>
        </section>
    )
}



export default TextReader;