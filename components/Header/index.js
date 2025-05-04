"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Problems", path: "/problems" },
    { name: "Discuss", path: "/discuss" },
    { name: "Interview Prep", path: "/interview-prep" },
];

export default function Header({ currentPath }) {
    const [menuState, setMenuState] = useState("closed");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (menuState === "open") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuState]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 70);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        if (menuState === "open") {
            setMenuState("closing");
            setTimeout(() => setMenuState("closed"), 400);
        } else {
            setMenuState("open");
        }
    };
    return (
        <header className={`${styles.header} ${isSticky ? styles.stickyHeader : ""}`}>
            <div className={styles.flex}>
        <span className={styles.svg}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
          >
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
                <ul
                    className={`${styles.nav} ${
                        menuState === "open"
                            ? styles.navoshort
                            : menuState === "closing"
                                ? `${styles.navoshort} ${styles.navoshortExit}`
                                : ""
                    }`}
                >
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`${styles["button-hover"]} ${
                                    currentPath === item.path ? styles.active : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger Icon */}
            <div
                className={`${styles.hamburger} ${
                    menuState === "open" ? styles.hamburgeroshort : ""
                }`}
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </header>
    );
}
