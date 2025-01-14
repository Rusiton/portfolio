import styles from './css/education.module.css';

function CurrentEducation({dictionary}){
    return(
        <div className={styles.section_education_col}>
            <h3 className={styles.section_education_col_title} style={{color: "#4DA25A"}}>{dictionary.education.currentEd}</h3>
            <div className={styles.section_education_col_content}>
                <div className={styles.section_education_col_row}>
                    <i className="fa-solid fa-clock fa-2x" style={{color: "#74C0FC"}}></i>
                    <div className={styles.section_education_row_content}>
                        <h4 className={styles.section_education_col_row_title}>{dictionary.education.studIn}<span style={{color: "var(--color-2)"}}>{dictionary.education.compEng}</span></h4>
                        <p className={styles.section_education_col_row_subtext}>{dictionary.education.uba}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentEducation;