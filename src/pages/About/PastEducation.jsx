import styles from './css/education.module.css';

function PastEducation({dictionary}){
    return(
        <div className={styles.section_education_col}>
            <h3 className={styles.section_education_col_title} style={{color: "var(--color-1)"}}>{dictionary.education.pastEd}</h3>
            <div className={styles.section_education_col_content}>
                <div className={styles.section_education_col_row}>
                    <i className="fa-solid fa-square-check fa-2x" style={{color: "#63E6BE"}}></i>
                    <div className={styles.section_education_row_content}>
                        <h4 className={styles.section_education_col_row_title}>{dictionary.education.degreeIn}<span style={{color: "var(--color-2)"}}>{dictionary.education.degree}</span></h4>
                        <p className={styles.section_education_col_row_subtext}>{dictionary.education.robArlt}</p>
                    </div>
                </div>
                <div className={styles.section_education_col_row}>
                    <i className="fa-solid fa-square-check fa-2x" style={{color: "#63E6BE"}}></i>
                    <div className={styles.section_education_row_content}>
                        <h4 className={styles.section_education_col_row_title}>{dictionary.education.privCourse}<span style={{color: "var(--color-2)"}}>{dictionary.education.english}</span></h4>
                        <p className={styles.section_education_col_row_subtext}>{dictionary.education.engInstitute}</p>
                        <p className={styles.section_education_col_row_subtext}>{dictionary.education.engLevel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastEducation;