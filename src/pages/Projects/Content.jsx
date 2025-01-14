import styles from './css/projects.module.css';

import Title from '../../components/Title';
import AllProjects from './AllProjects';
import SectionDescription from '../../components/SectionDescription';

function Content({dictionary}){
    return(
        <div className={styles.section_content_container}>
            <Title title={dictionary.title} section={"Projects"} />
            <SectionDescription section={"Projects"} text={dictionary.description} />
            <AllProjects dictionary={dictionary} />
        </div>
    );
}

export default Content;