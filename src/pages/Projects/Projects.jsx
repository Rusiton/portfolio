import { Context } from '../../App';
import { useContext } from 'react';

import { projects } from '../../assets/json/sections.json'
import styles from './css/projects.module.css';

import Content from './Content';

function Projects(){
    const context = useContext(Context);

    return(
        <div className={styles.section_container}>
            <Content dictionary={context.languaje === "english" ? projects.en : projects.es} />
        </div>
    )
}

export default Projects;