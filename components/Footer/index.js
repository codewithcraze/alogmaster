// components/Footer.js
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container}`}>
                <div className={styles.grid}>
                    <div>
                        <h3 className={styles.heading}>AlgoMaster</h3>
                        <p className={styles.textLight}>
                            Your ultimate resource for mastering data structures and algorithms. Practice, learn, and excel in coding interviews.
                        </p>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Resources</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#">Problems</Link></li>
                            <li><Link href="#">Study Plans</Link></li>
                            <li><Link href="#">Contest</Link></li>
                            <li><Link href="#">Interview Prep</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Contact</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>Connect</h3>
                        <div className={styles.socialIcons}>
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-instagram" /></a>
                            <a href="#"><i className="fab fa-github" /></a>
                        </div>
                        <p className={styles.textLight}>Subscribe to our newsletter</p>
                        <div className={styles.subscribe}>
                            <input type="email" placeholder="Your email" />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.sendIcon} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <p className={styles.textLight}>© 2023 AlgoMaster. All rights reserved.</p>
                    <div className={styles.policyLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
