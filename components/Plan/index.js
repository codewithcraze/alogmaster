import styles from './Plan.module.css';
import Link from "next/link";


export async function Plan(){
    return(
       <div className={styles.plan}>
           <div className={styles.dflex}>
               <div>
                   Recommended Study Plans
               </div>
               <div className={styles.flex}>
                   <Link href="/courses">View All</Link>
                   <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 ml-1"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                   >
                       <path
                           fillRule="evenodd"
                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                           clipRule="evenodd"
                       />
                   </svg>
               </div>
           </div>

           <StudyPlan />
       </div>
    )
}


function StudyPlan(){

    const plan = [{
        topic: "14-Days Crash Course",
        description: "Perfect for interview preparation with limited time. Covers essential topics and common patterns.",
        frequency: "2-3 hour daily",
        problems: "70 curated problems",
        slug: '14-days-crash-course'
    },
        {
            topic: "30-Day Mastery",
            description: "Perfect for interview preparation with limited time. Covers essential topics and common patterns.",
            frequency: "1-2 hours daily",
            problems: "150 curated problems",
            slug: '150-curated-questions'
        },
        {
            topic: "FAANG Preparation",
            description: "Perfect for interview preparation with limited time. Covers essential topics and common patterns.",
            frequency: "Flexible schedule",
            problems: "200+ company questions",
            slug: 'faang-preparation'
        }]

    return(
        <div className={styles.flexo}>
            {
                plan.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.planCourse} ${styles[`plan${index + 1}`]}`}
                    >


                    <h3>
                            {item.topic}
                        </h3>
                        <p>
                            {item.description}
                        </p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span>
                                {item.frequency}
                            </span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fillRule="evenodd"
                                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span>
                                {item.problems}
                            </span>
                        </div>
                        <div className={styles.start}>
                            <Link href={item.slug} className={`${styles[`font${index + 1}`]}`}>
                                Start Plan
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}