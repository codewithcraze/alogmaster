import styles from './ProblemCard.module.css';

export default function ProblemCard({ title, slug, description, numberOfProblem, easy, hard, medium }) {
    return (
        <div className={styles.card}>
            <a href={"/topics/" + slug}  className={styles.cardLink}>
                <div className={styles.cardHeader}>
                    <div className={styles.iconContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                    </div>
                    <span className={styles.problemCount}>{easy + hard + medium} Problems</span>
                </div>

                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>
                    {description}
                </p>

                <div className={styles.cardFooter}>
                    <div className={styles.difficultyTags}>
                        <span className={styles.easy}>Easy: {easy}</span>
                        <span className={styles.medium}>Medium: {hard}</span>
                        <span className={styles.hard}>Hard: {medium}</span>
                    </div>
                    <div className={styles.problemSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
}
