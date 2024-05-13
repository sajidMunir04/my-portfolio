import styles from "./MainBanner.module.css";
import { motion } from 'framer-motion';

function MainBanner() {
    return (<motion.div className={styles.container}>
        <h1 className={styles.mainText}>Sajid Munir</h1>
        <p className={styles.text}>I enjoy working as a web developer,
            and with the <span className={styles.highlightColorOne}>motivation and eagerness</span> to work on different stacks and gain practical knowledge, I believe I can
            be a <span className={styles.highlightColorOne}>valuable asset</span> to my <span className={styles.highlightColorTwo}>potential team.</span>
        </p>
    </motion.div>);
}

export default MainBanner;