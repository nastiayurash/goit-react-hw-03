import styles from "./Feedback.module.css";

const Feedback = ({ total, positive, good, neutral, bad }) => (
  <div className={styles.feedbackContainer}>
    <p className={styles.feedbackText}>
      Good: {good}
    </p>
    <p className={styles.feedbackText}>
      Neutral: {neutral}
    </p>
    <p className={styles.feedbackText}>
      Bad: {bad}
    </p>
    <p className={styles.feedbackText}>
      Total: {total}
    </p>
    <p className={styles.feedbackText}>
      Positive Feedback: {positive}%
    </p>
  </div>
);

export default Feedback;
