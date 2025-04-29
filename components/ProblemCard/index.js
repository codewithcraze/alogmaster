import styles from './ProblemCard.module.css';

export default function ProblemCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                </div>
                <span className={styles.problemCount}>120 Problems</span>
            </div>

            <h2 className={styles.title}>Arrays</h2>
            <p className={styles.description}>
                Master array manipulation, sorting, searching, and two-pointer techniques.
            </p>

            <div className={styles.cardFooter}>
                <div className={styles.difficultyTags}>
                    <span className={styles.easy}>Easy: 45</span>
                    <span className={styles.medium}>Medium: 55</span>
                    <span className={styles.hard}>Hard: 20</span>
                </div>
                <div className={styles.problemSvg}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
