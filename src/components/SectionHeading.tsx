import styles from "./SectionHeading.module.css";

interface Props {
    headingText: string
}

function SectionHeading(props: Props) {
    return (<h2 className={styles.main}>
        {props.headingText}
    </h2>);
}

export default SectionHeading;