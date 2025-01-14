import styles from './css/languajes.module.css';

import { Context } from '../../App';
import { useContext } from 'react';

import LanguajeItem from './LanguajeItem';

function Languajes({dictionary}){
    const context = useContext(Context);
    const animationClass = context.visitedSections.includes("About") ? styles.fastLoaded : "";
    
    if(animationClass === ""){
        setTimeout(() => {
            for(const hr of document.querySelectorAll("." + styles.knowledge_hr)){
                hr.classList.add(styles.animated);
            }
        }, 200);
    }

    return(
        <div className={styles.section_knowledge_languajes}>
            <LanguajeItem 
                iClassName={"fa-brands fa-html5 fa-2x"}
                iStyle={{color: "#E34C26"}}
                label={"HTML5"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-css3-alt fa-2x"}
                iStyle={{color: "#2965F1"}}
                label={"CSS3"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-square-js fa-2x"}
                iStyle={{color: "#FFD43B"}}
                label={"JAVASCRIPT"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-react fa-2x"}
                iStyle={{color: "#0079D6"}}
                label={"REACT JS"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-php fa-2x"}
                iStyle={{color: "#B197FC"}}
                label={"PHP"}
            />

            <LanguajeItem 
                iClassName={"fa-solid fa-terminal fa-1x"}
                iStyle={{color: "var(--color-5)", padding: "8px", backgroundColor: "var(--color-3)"}}
                label={"BASH SCRIPT"}
            />

            <LanguajeItem 
                label={"MVC"}
            />

            <LanguajeItem 
                iClassName={"fa-solid fa-microchip fa-2x"}
                iStyle={{color: "#496DAB"}}
                label={"API REST (PHP / EXPRESS JS)"}
            />

            <LanguajeItem 
                img={"mysql-icon"}
                label={"MySQL"}
            />

            <LanguajeItem 
                img={"expressjs-icon"}
                label={"EXPRESS JS"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-git-alt fa-2x"}
                iStyle={{color: "#F14E32"}}
                label={"GIT"}
            />

            <LanguajeItem 
                iClassName={"fa-brands fa-linux fa-2x"}
                iStyle={{color: "var(--color-3)"}}
                label={"LINUX"}
            />
        </div>
    );
}

export default Languajes;