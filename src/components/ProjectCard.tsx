import SkillTag from "./SkillTag";
import styles from "./ProjectCard.module.css";

interface Props {
    projectHeading: string,
    projectDescription: string,
    imageLink: string,
    techStacks: string[],
    sourceLink: string,
    demoLink: string
}

function ProjectCard(props : Props) {
    return (<div className={styles.container}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={props.imageLink}/>
        </div>
        <div>
            <div className={styles.textContainer}>
            <h3 className={styles.heading}>{props.projectHeading}</h3>
            <p className={styles.text}>{props.projectDescription}</p>
            </div>
            <div className={styles.infoSection}>
                <div className={styles.skillsContainer}>{props.techStacks.map((imgLink) => <img className={styles.techImage} src={imgLink}/>)}</div>
                <div className={styles.linksContainer}>
                    <a href={props.sourceLink} className={styles.link}>View Source</a>
                    <a href={props.demoLink} className={styles.link}>Demo Link</a>
                </div>
            </div>   
        </div>
    </div>);
}

export default ProjectCard;