import style from './../../styles/ComponentStyles/DocumantsPage.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Docs } from '../../projectFiles/docs';
import { id } from 'date-fns/locale';


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
                            {Docs.map(doc => {
                                return (
                                    <li key={doc.id}>
                                        <Link to={`/${doc.id}`}>{doc.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}


export default DocumentsPage;