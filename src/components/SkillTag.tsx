import styles from "./SkillTag.module.css";


interface Props {
    skillName: string
}


function SkillTag(props : Props) {
    return (
        <p className={styles.main}>{props.skillName}</p>
    );
}

export default SkillTag;