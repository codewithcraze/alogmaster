'use client'

import styles from "@/components/Hero/Hero.module.css";
import {useEffect, useMemo, useState} from "react";
import Link from "next/link";

const SearchQuestion = () => {
    const list = [
        { question: "How to find the maximum of a number", slug: "how-to-find-maximum-of-any-number" },
        { question: "How to search any number from an array", slug: "how-to-search-any-number" },
        { question: "What is a binary search and how to implement it", slug: "binary-search-implementation" },
        { question: "How to reverse a string in JavaScript", slug: "reverse-string-javascript" },
        { question: "How to check if a number is prime", slug: "check-prime-number" },
        { question: "How to sort an array using bubble sort", slug: "bubble-sort-array" },
        { question: "How to use recursion to calculate factorial", slug: "recursion-factorial" },
        { question: "What is the difference between map and forEach", slug: "map-vs-foreach" },
        { question: "How to find duplicate values in an array", slug: "find-duplicates-in-array" },
        { question: "How to flatten a nested array", slug: "flatten-nested-array" },
        { question: "What is debounce in JavaScript", slug: "debounce-in-javascript" },
        { question: "How to implement a stack using array", slug: "stack-using-array" },
        { question: "How to implement a queue in JavaScript", slug: "queue-in-javascript" },
        { question: "What is memoization and how to use it", slug: "memoization-in-js" },
        { question: "How to check for palindrome", slug: "check-palindrome" },
        { question: "How to merge two sorted arrays", slug: "merge-sorted-arrays" },
        { question: "What is the time complexity of merge sort", slug: "merge-sort-complexity" },
        { question: "How to implement binary tree traversal", slug: "binary-tree-traversal" },
        { question: "What is DFS and BFS", slug: "dfs-vs-bfs" },
        { question: "How to detect a cycle in a linked list", slug: "cycle-in-linked-list" },
        { question: "How to find the longest substring without repeating characters", slug: "longest-unique-substring" },
        { question: "How to use two pointers technique", slug: "two-pointers-technique" },
        { question: "What is sliding window technique", slug: "sliding-window-technique" },
        { question: "How to solve the knapsack problem", slug: "knapsack-problem" },
        { question: "What is dynamic programming", slug: "dynamic-programming" },
        { question: "How to implement LRU cache", slug: "lru-cache-implementation" },
        { question: "What are closures in JavaScript", slug: "javascript-closures" },
        { question: "Difference between var, let, and const", slug: "var-vs-let-vs-const" },
        { question: "How to deep clone an object", slug: "deep-clone-object" },
        { question: "How to debounce a function using lodash", slug: "lodash-debounce" },
        { question: "What is throttling in JS", slug: "throttling-in-js" },
        { question: "How to implement a priority queue", slug: "priority-queue-js" },
        { question: "How to check if two arrays are equal", slug: "check-equal-arrays" },
        { question: "How to rotate an array", slug: "rotate-array" },
        { question: "How to count vowels in a string", slug: "count-vowels" },
        { question: "How to find the GCD of two numbers", slug: "gcd-of-two-numbers" },
        { question: "What is tail recursion", slug: "tail-recursion" },
        { question: "How to convert string to camelCase", slug: "string-to-camelcase" },
        { question: "How to remove duplicates from array", slug: "remove-duplicates-array" },
        { question: "How to implement merge sort", slug: "merge-sort-implementation" },
        { question: "What is quick sort and how to use it", slug: "quick-sort-implementation" },
        { question: "How to shuffle an array randomly", slug: "shuffle-array" },
        { question: "How to find the first non-repeating character", slug: "first-non-repeating-char" },
        { question: "How to find intersection of two arrays", slug: "intersection-of-arrays" },
        { question: "What is a hash table", slug: "what-is-hash-table" },
        { question: "How to implement a trie", slug: "trie-implementation" },
        { question: "How to validate balanced parentheses", slug: "balanced-parentheses" },
        { question: "How to build a calculator in JS", slug: "build-calculator-js" },
        { question: "How to solve N-Queens problem", slug: "n-queens-problem" },
        { question: "How to check if string is anagram", slug: "check-anagram" }
    ];


    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    // Debounced search handler
    const debouncedSearch = useMemo(() => {
        let timer;
        return (text) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const filtered = list.filter(item =>
                    item.question.toLowerCase().includes(text.toLowerCase())
                );
                setData(filtered);
            }, 300);
        };
    }, []);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInput(text);
        if (text.trim().length === 0) {
            setData([]); // hide result if input is cleared
        } else {
            debouncedSearch(text);
        }
    };

    return (
        <>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search For Question"
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
        </>
    );
};

function ShowResult({data}) {
    return (
        <div className={`${styles.listContainer} ${styles.mainChange}` } >
            <ul className={styles.list}>
                {data.length === 0 ? (
                    <li>No results found.</li>
                ) : (
                    data.map((item, index) => (
                        <li key={index}>
                            <Link href={`/${item.slug}`}>
                                {item.question}
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default SearchQuestion;
