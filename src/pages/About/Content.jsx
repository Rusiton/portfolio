import styles from './css/about.module.css';

import Bubbles from './Bubbles';
import Title from '../../components/Title';
import SectionDescription from '../../components/SectionDescription';
import Knowledge from './Knowledge';
import Experience from './Experience';
import Education from './Education';

function Content({dictionary}){
    return(
        <div className={styles.section_content_container} id={"about_content"}>
            <Bubbles section={"About"} parent_id={"about_content"} />
            <Title title={dictionary.title} section={"About"} />
            <SectionDescription section={"About"} text={dictionary.about} />
            <Knowledge dictionary={dictionary} />
            <Experience dictionary={dictionary} />
            <Education dictionary={dictionary} />
        </div>
    );
}

export default Content;