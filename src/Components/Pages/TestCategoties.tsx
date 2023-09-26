import style from './../../styles/ComponentStyles/TestCategories.module.css';
import grif from './../../images/testGrif.svg';
import { Link } from 'react-router-dom';
import Test from '../../types/Test';

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

    const categories: Array<string> = ['web', 'crypto', 'forensic', 'osint']


    return (
        <section className={`${style.window} testCategoryWindow`}>
            <div className={style.tests}>
                <h1>Тесты</h1>
                {categories.map(category => {
                    return (<TestItem category={category}/>)
                })}
            </div>
            <div className={style.grif}>
                <img src={grif}/>
            </div>
        </section>
    )
}



export {TestCategories};