import styles from './css/education.module.css';

import { Context } from '../../App';
import { useContext } from 'react';

import PastEducation from './PastEducation';
import CurrentEducation from './CurrentEducation';

function Education({dictionary}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : "";

    if(animationClass === ""){
        setTimeout(() => {
            try{
                document.querySelector("." + styles.section_education_container).classList.add(styles.animated);
                document.querySelector("." + styles.section_education_content_line).classList.add(styles.animated);
            }
            catch(e){
                return;
            }
        }, 1000);
    }

    return(
        <div className={styles.section_education_container + " " + animationClass}>
            <img src="./assets/svg/education.svg" className={styles.section_education_icon} />
            <h2 className={styles.section_education_title}>{dictionary.education.title}</h2>
            <div className={styles.section_education_content}>
                <PastEducation dictionary={dictionary} />
                <CurrentEducation dictionary={dictionary} />
            </div>

        </div>
    );
}

export default Education;