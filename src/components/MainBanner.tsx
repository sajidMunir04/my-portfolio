import styles from "./MainBanner.module.css";
import { motion } from 'framer-motion';

function MainBanner() {
    return (<motion.div className={styles.container}>
        <h1 className={styles.mainText}>Sajid Munir</h1>
        <p className={styles.text}>A passionate developer who wants to learn and grow
        </p>
    </motion.div>);
}

export default MainBanner;