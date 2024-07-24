import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I discovered my passion for web development when I realized how these products are helping people every day. Now that I have completed my courses and with several projects under my belt and most of my work in full stack development, I am looking for an entry-level opportunity to be a part of a team, where I can grow and provide my maximum value.
        </p>
    </div>);
}

export default About;