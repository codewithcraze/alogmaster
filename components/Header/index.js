"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Problems', path: '/problems' },
    { name: 'Discuss', path: '/discuss' },
    { name: 'Interview Prep', path: '/interview-prep' },
];

export default function Header({ currentPath }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the navigation menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <header className={styles.header}>
            <div className={styles.flex}>
                <span className={styles.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <h3>
                    <Link href="/" className={styles.muted}>
                        AlgoMaster
                    </Link>
                </h3>
            </div>

            {/* Navigation Menu */}
            <nav>
                <ul className={`${styles.nav} ${isMenuOpen ? styles.navoshort : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`${styles['button-hover']} ${currentPath === item.path ? styles.active : ''}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/*<div className={styles.signin}>*/}
            {/*    <button>Sign In</button>*/}
            {/*</div>*/}

            {/* Hamburger icon for small screens */}
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgeroshort : ''}`} onClick={toggleMenu} >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
    );
}
