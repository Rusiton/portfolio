import styles from './css/experience.module.css';

import { Context } from '../../App';
import { useContext } from 'react';

function Experience({dictionary}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : "";

    if(animationClass === ""){
        setTimeout(() => {
            try{
                document.querySelector("." + styles.section_experience_container).classList.add(styles.animated);
                document.querySelector("." + styles.section_experience_content_line).classList.add(styles.animated);
            }
            catch(e){
                return;
            }
        }, 600);
    }
    

    return(
        <div className={styles.section_experience_container + " " + animationClass}>

            <img src="./assets/img/experience.png" className={styles.section_experience_icon} />
        
            <h2 className={styles.section_experience_title}>{dictionary.workexp.title}</h2>
            <div className={styles.section_experience_content}>

                <div className={styles.section_experience_row}>
                    <div className={styles.section_experience_row_dot}>
                        <hr className={styles.section_experience_content_line + " " + animationClass} />
                        <i className="fa-solid fa-circle fa-1x" style={{color: "#5f94ff"}}></i>
                    </div>
                    <div className={styles.section_experience_row_info}>
                        <p className={styles.section_experience_row_text}>{dictionary.workexp.workedAsEvaP}<span style={{color: "var(--color-2)"}}>{dictionary.workexp.itInternEvaP}</span>{dictionary.workexp.atEvaP}<span style={{color: "var(--color-1)"}}>"Hospital Interzonal General de Agudos Eva Perón"</span></p>
                        <p className={styles.section_experience_row_subtext}>{dictionary.workexp.evadb}</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Experience;