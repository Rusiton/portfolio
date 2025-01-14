import useElementAnimation from '../hooks/useElementAnimation';
import styles from './css/section-description.module.css';

function SectionDescription({section, text}){
    const [container_ref, animation_class] = useElementAnimation(section);

    return(
        <div className={styles.section_description + " " + (animation_class === "animated" ? styles.animated : styles.fastLoaded)} ref={container_ref}>
            <div className={styles.description}>
                <p className={styles.description_text}>{text}</p>
            </div>
        </div>
    );
}

export default SectionDescription;