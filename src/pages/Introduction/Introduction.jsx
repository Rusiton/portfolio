import { Context } from '../../App';
import { useContext } from 'react';

import { introduction } from '../../assets/json/sections.json';
import styles from './css/introduction.module.css';

import Content from './Content';

function Introduction(){
    const context = useContext(Context);
    let animation_class = context.visitedSections.includes("Introduction") ? styles.fastLoaded : "";

    setTimeout(() => {
        try {
            document.getElementById("section_socialmedia_label").classList.add(styles.animated);
            document.getElementById("section_socialmedia_list").classList.add(styles.animated);
            document.getElementById("section_curriculum_link").classList.add(styles.animated);
        }
        catch (e) {
            return;
        }
    }, 1500);
    
    

    return(
        <div className={styles.section_container}>
            <Content dictionary={context.languaje === "english" ? introduction.en : introduction.es} animationClass={animation_class} />
        </div>
    )
}

export default Introduction;