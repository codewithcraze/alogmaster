import styles from './CommingSoon.module.css';

export default function ComingSoon() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Coming Soon</h1>
            <p className={styles.description}>
            We are working hard to bring you this feature. Stay tuned!
            </p>
        </div>
        <div>
            <a href='/'>Go back home</a>
        </div>
    </div>
  );
}
