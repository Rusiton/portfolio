import styles from './css/languaje-item.module.css'

import { Context } from '../../App';
import { useContext } from 'react';

function LanguajeItem({iClassName, iStyle, label, img}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : "";
    const randId = Math.floor(Math.random() * 10000);

    if(animationClass === ""){
        setTimeout(() => {
            try {
                document.getElementById("languaje_item" + randId).classList.add(styles.visible);
            } 
            catch(e){ return; }
        }, Math.floor(Math.random() * 800) + 800);
    }

    return(
        <div className={styles.section_knowledge_col_item + " " + animationClass} id={"languaje_item" + randId}>
            {iClassName ? <i className={iClassName} style={iStyle}></i> : (img ? <img src={`./src/assets/svg/${img}.svg`} /> : null)}
            <p className={styles.section_knowledge_col_item_label}>{label}</p>
        </div>
    );
}

export default LanguajeItem;