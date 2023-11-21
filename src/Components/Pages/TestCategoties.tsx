import style from './../../styles/ComponentStyles/TestCategories.module.css';
import grif from './../../images/testGrif.svg';
import { Link, useNavigate } from 'react-router-dom';
import Test from '../../types/Test';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { tests } from '../../tests';
import CategoryItemType from '../../types/Test';

interface TestItemProps {
    test: CategoryItemType,
}

const TestItem: React.FC<TestItemProps> = ({test}) => {
    return (
        <section className={style.categories}>
            <div>
                <h3>{test.title}</h3>
                <article>
                    <p> <Link to={`./${test.id}`}>Перейти к тесту</Link></p>
                </article>
            </div>
        </section>
    )
}



const TestCategories: React.FC = () => {


    const navigate = useNavigate();

    const goBack = () => navigate(-1);


    return (
        <section className={`${style.window} testCategoryWindow`}>
            <Button variant='text' color='secondary' onClick={goBack} className={style.backBtn}><ArrowBackIcon />  Назад</Button>
            <h1 className={style.title}>Тесты</h1>
            <div className={style.tests}>
                {tests.map(test => {
                    return (<TestItem key={test.title}  test={test}/>)
                })}
            </div>
            <div className={style.grif}>
                <img src={grif}/>
            </div>
        </section>
    )
}



export default TestCategories;