import styles from './css/all-projects.module.css';
import Project from './Project';

function AllProjects({dictionary}){
    return(
        <div className={styles.projects_container}>
            {dictionary.all_projects.map((project) => {
                return(
                    <Project
                        key={project.title}
                        img_url={project.image_url}
                        title={project.title}
                        description={project.description}
                        roles={project.roles}
                        tools={project.tools}
                    />
                );
            })}
        </div>
    );
}

export default AllProjects;