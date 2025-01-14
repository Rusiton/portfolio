import useElementOnScreen from '../../hooks/useElementOnScreen';

import styles from './css/project.module.css';

function Project({img_url, title, description, roles, tools}){
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "100px",
        threshold: 0.2
    });
    
    return(
        <div className={`${styles.project} ${isVisible ? styles.visible : ""}`} id={`project_${Math.floor(Math.random() * 10000)}`} ref={containerRef}>
            <div className={styles.project_left_side}>
                <img src={`./src/assets/img/${img_url}`} className={styles.project_image} />
            </div>
            <div className={styles.project_right_side}>
                <h2 className={styles.project_title}>{title}</h2>
                <p className={styles.project_description}>{description}</p>
                <div className={styles.project_info}>
                    <div className={styles.project_info_col}>
                        <h3 className={styles.project_info_col_title}>Roles</h3>
                        <p className={styles.project_info_col_text}>{roles}</p>
                    </div>
                    <div className={styles.project_info_col}>
                        <h3 className={styles.project_info_col_title}>Tools</h3>
                        <p className={styles.project_info_col_text}>{tools}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;