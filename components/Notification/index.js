"use client";
import styles from './Notification.module.css';

const Notification = ({notice}) => {
  return (
    <div className={styles.notification}>
      <div className={styles.scrolling}>
        <span>Note:</span> {notice}
      </div>
    </div>
  );
};

export default Notification;
