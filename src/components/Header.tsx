import styles from "./Header.module.css";
import { motion } from 'framer-motion'



function Header() {
    return (<motion.header className={styles.container} initial={{x: -200}} whileInView={{x: 0}}>
        <nav className={styles.nav}>
            <a className={styles.navLink} href="#about">About Me</a>
            <a className={styles.navLink} href="#projects">Projects</a>
            <a className={styles.navLink} href="#skills">Skills</a>
            <a className={styles.navLink} href="#contact">Contact</a>
        </nav>
    </motion.header>);
}

export default Header;