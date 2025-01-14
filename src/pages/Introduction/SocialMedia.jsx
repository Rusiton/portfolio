import styles from '../../css/introduction.module.css';

function SocialMedia({dictionary, animationClass}){
    return(
        <div className={styles.section_socialmedia_container}>
            <p className={styles.section_socialmedia_label} id="section_socialmedia_label">{dictionary.visitSocialMedia}</p>
            <ul className={styles.section_socialmedia_list + " " + animationClass} id="section_socialmedia_list">
                <li className={styles.section_socialmedia_item}>
                    <a href="https://github.com/Rusiton" target="_blank" className="link-github"><i className="fa-brands fa-github fa-2x"></i></a>
                </li>
                <li className={styles.section_socialmedia_item}>
                    <a href="https://gitlab.com/Rusiton" target="_blank" className="link-gitlab"><i className="fa-brands fa-gitlab fa-2x"></i></a>
                </li>
                <li className={styles.section_socialmedia_item}>
                    <a href="https://linkedin.com/in/galassosantiago/" target="_blank" className="link-linkedin"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;