import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";
import styles from "./SkillSection.module.css";


function SkillSection() {
    return (<div className={styles.container} id="skills">
        <SectionHeading headingText={"Skills"}/>
        <div className={styles.contentContainer}> 
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Web Development</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"HTML"} />
                <SkillTag skillName={"CSS"} />
                <SkillTag skillName={"Javascript"} />
                <SkillTag skillName={"Typescript"} />
                <SkillTag skillName={"React"} />
                <SkillTag skillName={"Angular"} />
                <SkillTag skillName={"Node.js"} />
                <SkillTag skillName={"express.js"} />
                </div>
            </div>
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Databases</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"MongoDB"} />
                <SkillTag skillName={"PSQL"} />
                </div>
            </div>
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Project Managment</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"JIRA"} />
                <SkillTag skillName={"Trello"} />
                </div>
            </div>
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Languages</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Typescript"} />
                <SkillTag skillName={"Javascript"} />
                <SkillTag skillName={"C#"} />
                </div>
            </div>
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Design Tools</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Figma"} />
                </div>
            </div>
            <div className={styles.skillSection}>
                <p className={styles.skillHeading}>Version Control</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Github"} />
                <SkillTag skillName={"BitBucket"} />
                </div>
            </div>
        </div>
    </div>);
}

export default SkillSection;