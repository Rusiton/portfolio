import { Context } from '../App';
import { useContext } from 'react';

import styles from './css/title.module.css';

function Title({title, section}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes(section) ? styles.fastLoaded : styles.animated;
    
    return(
        <div className={styles.section_title_container}>
            <h1 className={styles.section_title + " " + animationClass}>{title}</h1>
        </div>
    );
}

export default Title;