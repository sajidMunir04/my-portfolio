import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";
import styles from "./SkillSection.module.css";


function SkillSection() {
    return (<div className={styles.container}>
        <SectionHeading headingText={"Skills"}/>
        <div>
            <div>
                <p>Web Development</p>
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
                <p>Databases</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"MongoDB"} />
                <SkillTag skillName={"PSQL"} />
                </div>
            </div>
            <div>
                <p>Design Tools</p>
                <div className={styles.skillDetailsContainer}>
                <SkillTag skillName={"Figma"} />
                </div>
            </div>
            <div>
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