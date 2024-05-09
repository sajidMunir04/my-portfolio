import styles from "./Header.module.css";
import { motion } from 'framer-motion'



function Header() {
    return (<motion.header className={styles.container} initial={{x: -200}} whileInView={{x: 0}}>
        <nav className={styles.nav}>
            <a className={styles.navLink} href="#">About Me</a>
            <a className={styles.navLink} href="#">Skills</a>
            <a className={styles.navLink} href="#">Experience</a>
            <a className={styles.navLink} href="#">Projects</a>
        </nav>
    </motion.header>);
}

export default Header;