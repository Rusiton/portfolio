import { Context } from '../../App';
import { useContext } from 'react';

import styles from './css/title.module.css';

function Title({dictionary}){
    const context = useContext(Context);
    let animationClass = context.visitedSections.includes("Introduction") ? styles.fastLoaded : "";

    if(animationClass === ""){
        setTimeout(() => {
            try {
                document.getElementById("section_title").classList.add(styles.animated);
            }
            catch (e) {
                return;
            }
        }, 300);
    
        setTimeout(() => {
            try {
                document.getElementById("section_subtitle").classList.add(styles.animated);
            }
            catch (e) {
                return;
            }
        }, 1500);

        setTimeout(() => {
            try {
                document.getElementById("section_title_container").classList.add(styles.slideDown);
            }
            catch (e) {
                return;
            }
        }, 2500);
    }

    return(
        <div className={styles.section_title_container + " " + animationClass} id="section_title_container">
            <h1 className={styles.section_title + " " + animationClass} id="section_title">{dictionary.title}</h1>
            <h2 className={styles.section_subtitle + " " + animationClass} id="section_subtitle">{dictionary.subtitle}</h2>
        </div>
    );
}

export default Title;