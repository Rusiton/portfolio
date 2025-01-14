import styles from '../../css/introduction.module.css';

function Curriculum({dictionary, animationClass}){
    return(
        <div className={styles.section_curriculum_container}>
            <a href="./assets/pdf/curriculum-galasso-santiago.pdf" target="_blank" className={styles.section_curriculum_link + " " + animationClass} id="section_curriculum_link">{dictionary.seeCurriculum}</a>
        </div>
    );
}

export default Curriculum;