import { Context } from '../../App';
import { useContext } from 'react';

import { contact } from '../../assets/json/sections.json'
import styles from './css/contact.module.css';

import Content from './Content';

function Contact(){
    const context = useContext(Context);

    return(
        <div className={styles.section_container}>
            <Content dictionary={context.languaje === "english" ? contact.en : contact.es} />
        </div>
    )
}

export default Contact;