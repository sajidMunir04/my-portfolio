import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I am a curios, good listener and happen to have a problem solving mindset.
         I believe tha one should be able to assess the value of the output of each choice or decision in profressional or personal life 
            and come with a best value approach which is feasible as well.
        </p>
    </div>);
}

export default About;