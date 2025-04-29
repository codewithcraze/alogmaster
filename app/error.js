// error.js

"use client";  // error.js hamesha client component hota hai

import { useEffect } from "react";

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error("Error captured:", error);
    }, [error]);

    return (
        <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
            <h2>Something went wrong! 😵</h2>
            <p>{error.message}</p>

            <button
                onClick={() => reset()}
                style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px" }}

          >
                Try Again
            </button>
        </div>
    );
}
