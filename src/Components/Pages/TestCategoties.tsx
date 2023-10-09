import style from './../../styles/ComponentStyles/TestCategories.module.css';
import grif from './../../images/testGrif.svg';
import { Link, useNavigate } from 'react-router-dom';
import Test from '../../types/Test';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




interface Category {
    category: string;
}


const TestItem: React.FC<Category> = ({category}) => {
    return (
        <section className={style.categories}>
            <div>
                <h3>{category}</h3>
                <article>
                    <p> <Link to={`./${category}`}>Перейти к тесту</Link></p>
                </article>
            </div>
        </section>
    )
}



const TestCategories: React.FC = () => {

    const categories: Array<string> = ['web', 'crypto', 'forensic', 'osint'];

    const navigate = useNavigate();

    const goBack = () => navigate(-1);


    return (
        <section className={`${style.window} testCategoryWindow`}>
            <Button variant='text' color='secondary' onClick={goBack} className={style.backBtn}><ArrowBackIcon />  Назад</Button>
            <h1 className={style.title}>Тесты</h1>
            <div className={style.tests}>
                {categories.map(category => {
                    return (<TestItem key={category} category={category}/>)
                })}
            </div>
            <div className={style.grif}>
                <img src={grif}/>
            </div>
        </section>
    )
}



export default TestCategories;