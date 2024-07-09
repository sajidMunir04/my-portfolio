import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I discovered my passion for web development, when I realized how these solutions are helping people every day, and now when I have completed my courses and with several projects under my belt and most of my work on end-to-end development, I am looking for an entry level opportunity to be a part of a team, where I can grow and make an impact.
        </p>
    </div>);
}

export default About;