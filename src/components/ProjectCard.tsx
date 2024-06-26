import { TechStack } from "../lib/TechStack";
import styles from "./ProjectCard.module.css";
import TechStackCard from "./TechStackCard";

interface Props {
    projectHeading: string,
    projectDescription: string,
    imageLink: string,
    techStacks: TechStack[],
    sourceLink: string,
    demoLink: string
}

function ProjectCard(props : Props) {
    return (<div className={styles.container}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={props.imageLink}/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
            <h3 className={styles.heading}>{props.projectHeading}</h3>
            <p className={styles.text}>{props.projectDescription}</p>
            </div>
            <div className={styles.infoSection}>
                <div className={styles.skillsContainer}>{props.techStacks.map((techStack) => <TechStackCard imageLink={techStack.imageLink}
                 stackDetail={techStack.stackDetail}/>)}</div>
                <div className={styles.linksContainer}>
                    <div className={styles.linkSection}>
                    <a href={props.sourceLink} className={styles.link}>Github</a>
                    </div>
                    {props.demoLink.length > 0 && <div className={styles.linkSection}>
                    <a href={props.demoLink} className={styles.link}>Preview</a>
                    </div>}
                </div>
            </div>   
        </div>
    </div>);
}

export default ProjectCard;