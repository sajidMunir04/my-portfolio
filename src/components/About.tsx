import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I believe that the all the progress on any task shall be done by considering the end result
            only and perhaps deadlines too, and one should be able to assess the value of the output 
            and come with a best value approach which is feasible as well.
        </p>
    </div>);
}

export default About;