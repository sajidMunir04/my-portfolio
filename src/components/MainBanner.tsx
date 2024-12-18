import styles from "./MainBanner.module.css";
import { motion } from 'framer-motion';

function MainBanner() {
    return (<motion.div className={styles.container}>
        <h1 className={styles.mainText}>Sajid Munir</h1>
        <p className={styles.text}>I love solving problems and creating amazing user interfaces
        </p>
    </motion.div>);
}

export default MainBanner;