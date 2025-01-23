import styles from "./Options.module.css";


const Options = ({ updateFeedback, resetFeedback, feedback }) => (
  <div className={styles.optionsContainer}>
    <button
      className={styles.optionButton}
      onClick={() => updateFeedback("good")}
    >
      Good 
    </button>
    <button
      className={styles.optionButton}
      onClick={() => updateFeedback("neutral")}
    >
      Neutral 
    </button>
    <button
      className={styles.optionButton}
      onClick={() => updateFeedback("bad")}
    >
      Bad 
    </button>
    {feedback.good + feedback.neutral + feedback.bad > 0 && (
      <button className={styles.resetButton} onClick={resetFeedback}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
