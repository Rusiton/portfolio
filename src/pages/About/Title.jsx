import { Context } from '../../App';
import { useContext } from 'react';

import styles from './css/title.module.css';

function Title({dictionary}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : styles.animated;

    return(
        <div className={styles.section_title_container}>
            <h1 className={styles.section_title + " " + animationClass}>{dictionary.title}</h1>
        </div>
    );
}

export default Title;