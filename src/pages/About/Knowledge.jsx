import styles from './css/knowledge.module.css';

import { Context } from '../../App';
import { useContext } from 'react';

import Languajes from './Languajes';

function Knowledge({dictionary}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : "";

    if(animationClass === ""){
        setTimeout(() => {
            try{
                document.querySelector("." + styles.section_knowledge_container).classList.add(styles.animated);
            }
            catch(e){
                return;
            }
        }, 300);
    }
    
    return(
        <div className={styles.section_knowledge_container + " " + animationClass}>
            <img src="./src/assets/svg/knowledge.svg" className={styles.section_experience_icon} />
            <h2 className={styles.section_knowledge_title}>{dictionary.knowledge.title}</h2>
            <Languajes dictionary={dictionary} />
        </div>
    );
}

export default Knowledge;