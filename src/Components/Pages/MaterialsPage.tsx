import style from './../../styles/ComponentStyles/MaterialsPage.module.css';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Tooltip } from '@mui/material';



interface LinksType {
    title: string,
    link: string,
    description: string,
}

const links: Array<LinksType> = [
    {
        title: 'Тестовые задания',
        link: 'тесты',
        description: 'Тесты представлены вам для лучшей подготовке к олимпиаде.'
    },
    {
        title: 'Инструкция по прохождению тестовых заданий',
        link: 'инструкция к олимпиаде',
        description: 'Перед тем как приступить к пользованию платформы, рекомендуется прочитать инструкцию.'
    }
]

const technologies: Array<string> = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png',
    'https://web-creator.ru/technologies/css3.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/2560px-TypeScript_Logo_%28Blue%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    'https://mui.com/static/logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png',
    'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png',
    'https://cdn.icon-icons.com/icons2/2415/PNG/512/django_original_logo_icon_146559.png'
]



const MaterialsPage: React.FC = () => {
    return (
        <section className={`${style.window} materialWindow`}>
            <h1>Материалы</h1>
            <div className={style.flexWrapped}>
                {links.map(item => {
                    return (
                        <article>
                            <p><OpenInNewIcon /><Tooltip title='Перейти' followCursor><Link to={`/${item.link}`}>{item.title}</Link></Tooltip></p>
                            <p>{item.description}</p>
                        </article>
                    )
                })}
            </div>
            <h3>Используемые технологии</h3>
            <div className={style.tech}>
                {technologies.map(image => {
                    return (
                        <img src={image}/>
                    )
                })}
            </div>
        </section>
    )
}


export default MaterialsPage;