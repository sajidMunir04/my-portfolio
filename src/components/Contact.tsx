import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.css";

function Contact() {
    return (<div className={styles.container}>
        <SectionHeading headingText={"Contact"}/>
        <form className={styles.form}>
            <div className={styles.inputFieldContainer}>
                <label className={styles.label}>Name
                <input className={styles.input} type='text' placeholder="Name"/>
                </label>
                <label className={styles.label}>Email Address
                <input className={styles.input} type='email' placeholder="Contact Email"/>
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <label className={styles.textAreaLabel}>Your Message
                    <textarea className={styles.textarea} placeholder="Your Message"></textarea>
                </label>
                <button className={styles.button} type='button'>Submit</button>
            </div>
        </form>
    </div>);
}

export default Contact;