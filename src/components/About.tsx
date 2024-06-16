import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I am curios, good listener and have a problem solving mindset.
         I believe that one should be able to analyze the value or potential output of each choice or decision
            and come with a best value approach which is feasible as well.
        </p>
    </div>);
}

export default About;