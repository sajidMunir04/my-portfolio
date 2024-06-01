import { TechStack } from "../lib/TechStack";
import styles from "./TechStackCard.module.css";

function TechStackCard(props : TechStack) {
    return (<div className={styles.container}>
                <div className={styles.imageContainer}>
                        <img className={styles.image} src={props.imageLink}/>
                </div>
            <p className={styles.text}>{props.stackDetail}</p>
    </div>);
}

export default TechStackCard;