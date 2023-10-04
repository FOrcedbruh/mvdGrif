import style from './../../styles/ComponentStyles/ContactsPage.module.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import  Tooltip  from '@mui/material/Tooltip';


const ContactsPage: React.FC = () => {
    return (
        <section className={`${style.window} contactWindow`}>
            <div className={style.contact}>
                <p>Для связи с организационным комитетом используйте данную почту: <Tooltip followCursor title='Написать на почту'><a href="mailto: olimpiada.mosu@mail.ru">olimpiada.mosu@mail.ru</a></Tooltip></p>
            </div>
            <Alert severity='info'>
                <AlertTitle>
                    Задать вопрос оргкомитету
                </AlertTitle>
                Перед тем как задать вопрос, посмотрите, нет ли на него ответа в разделе «Порядок проведения» или в документах «Положение» и «Регламент»
            </Alert>
        </section>
    )
}


export default ContactsPage;