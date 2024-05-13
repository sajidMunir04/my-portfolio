import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";
import styles from "./SkillSection.module.css";


function SkillSection() {
    return (<div className={styles.container}>
        <SectionHeading headingText={"Skills"}/>
        <div>
            <div>
                <p className={styles.skillHeading}>Web Development</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"HTML"} />
                <SkillTag skillName={"CSS"} />
                <SkillTag skillName={"Javascript"} />
                <SkillTag skillName={"Typescript"} />
                <SkillTag skillName={"React"} />
                <SkillTag skillName={"Angular"} />
                </div>
            </div>
            <div>
                <p className={styles.skillHeading}>Databases</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"MongoDB"} />
                <SkillTag skillName={"PSQL"} />
                </div>
            </div>
            <div>
                <p className={styles.skillHeading}>Languages</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Typescript"} />
                <SkillTag skillName={"Javascript"} />
                <SkillTag skillName={"C#"} />
                </div>
            </div>
            <div>
                <p className={styles.skillHeading}>Design Tools</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Figma"} />
                </div>
            </div>
            <div className={styles.skillHeading}>
                <p>Version Control</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Github"} />
                <SkillTag skillName={"BitBucket"} />
                </div>
            </div>
        </div>
    </div>);
}

export default SkillSection;