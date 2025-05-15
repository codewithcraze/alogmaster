'use client';

import styles from "@/components/Hero/Hero.module.css";
import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";

const SearchQuestion = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const timerRef = useRef(null); // To persist timer across renders

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/dsa/questions');
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                if (data.status === 200) {
                    const questions = data.data.map(item => ({
                        question: item.statement,
                        slug: item.slug
                    }));
                    setList(questions);
                } else {
                    console.error('Failed to fetch questions:', data.message);
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const debouncedSearch = useMemo(() => {
        return (text) => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                const filtered = list.filter(item =>
                    item.question.toLowerCase().includes(text.toLowerCase())
                );
                setData(filtered);
            }, 300);
        };
    }, [list]);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInput(text);

        if (text.trim().length === 0) {
            setData([]);
        } else {
            debouncedSearch(text);
        }
    };

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search Problem, Topics, and Concepts..."
                    value={input}
                    onChange={handleInputChange}
                />
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </span>
            </div>

            {input.trim().length > 0 && <ShowResult data={data} />}
        </div>
    );
};

const ShowResult = ({ data }) => {
    return (
        <div className={`${styles.listContainer} ${styles.mainChange}`}>
            <ul className={styles.list}>
                {data.length === 0 ? (
                    <li>No results found.</li>
                ) : (
                    data.map((item, index) => (
                        <li key={index}>
                            <Link href={`/questions/${item.slug}`}>
                                {item.question}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default SearchQuestion;
