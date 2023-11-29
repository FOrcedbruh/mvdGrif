import { Docs } from '../../projectFiles/docs';
import style from './../../styles/ComponentStyles/TextReader.module.css';
import { Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

const TextReader: React.FC = () => {

    const {id} = useParams();
    console.log(id);

    const numberID = Number(id);

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className={`${style.window} textReader`}>
            <Button color="secondary" onClick={goBack} className={style.backBtn}><ArrowBack/> Назад</Button>
            <h1>{Docs[numberID].title}</h1>
            <article className={style.article}>
                <p>{Docs[numberID].article}</p>
            </article>
        </section>
    )
}



export default TextReader;