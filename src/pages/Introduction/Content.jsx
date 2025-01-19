import styles from './css/introduction.module.css';

import Bubbles from './Bubbles';
import Title from './Title';
import SocialMedia from './SocialMedia';
import Curriculum from './Curriculum';

function Content({dictionary, animationClass}){
    return(
        <div className={styles.section_content_container}>
            <Bubbles />
            <Title dictionary={dictionary} animationClass={animationClass} />
        </div>
    );
}

export default Content;