import styles from "./About.module.css";

function About() {
    return (<div className={styles.container} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>I discovered my passion for web development when I realized how these products are helping people every day, and how much I enjoy creating web applications
        </p>
    </div>);
}

export default About;
