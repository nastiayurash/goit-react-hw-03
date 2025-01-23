
import styles from "./Description.module.css";

const Description = ({ title, text }) => (
    <div className={styles.descriptionContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
    </div>
);
export default Description;







