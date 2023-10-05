import style from './../../styles/ComponentStyles/DocumantsPage.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const DocumentsPage: React.FC = () => {




    return (
        <section className={`${style.window} documentsWindow`}>
            <h1>Документы</h1>
            <div  className={style.documents}>
                <Accordion className={style.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h4>Документы для ознакомления</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li><Link to='/PDFReader'>Согласие на обработку персональных данных</Link></li>
                            <li><Link to='/PDFReader'>Положение</Link></li>
                            <li><Link to='/PDFReader'>Регламент</Link></li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}


export default DocumentsPage;