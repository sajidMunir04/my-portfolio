import SkillTag from "./SkillTag";
import styles from "./ProjectCard.module.css";

interface Props {
    projectHeading: string,
    projectDescription: string,
    imageLink: string
    tags: string[]
}

function ProjectCard(props : Props) {
    return (<div className={styles.container}>
        <div className={styles.linksContainer}>
            <a className={styles.link}>View Source</a>
            <a className={styles.link}>Demo Link</a>
        </div>
        <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>
                <img className={styles.image} src={props.imageLink}/>
            </div>
        </div>
        <div>
            <h3 className={styles.heading}>{props.projectHeading}</h3>
            <p className={styles.text}>{props.projectDescription}</p>
            <div className={styles.skillsContainer}>{props.tags.map((tag) => <SkillTag skillName={tag}/>)}</div>   
        </div>
    </div>);
}

export default ProjectCard;