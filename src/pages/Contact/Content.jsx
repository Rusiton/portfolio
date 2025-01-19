import styles from './css/contact.module.css';

import Title from '../../components/Title';
import Form from './Form';

function Content({dictionary}){
    return(
        <div className={styles.section_content_container}>
            <Title title={dictionary.title} section={"Contact"} />
            <Form dictionary={dictionary} />
        </div>
    );
}

export default Content;