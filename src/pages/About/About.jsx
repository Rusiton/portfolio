import { Context } from '../../App';
import { useContext } from 'react';

import { about } from '../../assets/json/sections.json';
import styles from './css/about.module.css';

import Content from './Content';

function About(){
    const context = useContext(Context);

    return(
        <div className={styles.section_container}>
            <Content dictionary={context.languaje === "english" ? about.en : about.es} />
        </div>
    )
}

export default About;