import styles from "./Notification.module.css";

const Notification = () => (
  <div className={styles.notificationContainer}>
    <p className={styles.notificationText}>No feedback given yet.</p>
  </div>
);

export default Notification;
