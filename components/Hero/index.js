import styles from './Hero.module.css';
import SearchQuestion from './search.question';
import ProblemCard from "@/components/ProblemCard";

const Hero = ({title, description}) => {

    const problemData = [
        {
            title: "Array",
            description: "Array Questions - 120 problems for mastering arrays in programming. Includes easy, medium, and hard levels.",
            numberOfProblem: "120",
            easy: "24",
            medium: "52",
            hard: "23",
            category: "Array",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["Array", "Programming", "Data Structures", "Easy Problems", "Medium Problems", "Hard Problems"],
        },
        {
            title: "String",
            description: "String Questions - 100 problems to practice string manipulation and algorithms in programming.",
            numberOfProblem: "100",
            easy: "20",
            medium: "62",
            hard: "18",
            category: "String",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["String", "Programming", "Data Structures", "String Manipulation", "Algorithms"],
        },
        {
            title: "Linked List",
            description: "Linked List Questions - 90 problems for understanding linked list operations and algorithms.",
            numberOfProblem: "90",
            easy: "30",
            medium: "45",
            hard: "15",
            category: "Linked List",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["Linked List", "Programming", "Data Structures", "Linked List Operations"],
        },
        {
            title: "Rest",
            description: "Miscellaneous Questions - 150 problems covering a variety of algorithms and data structures.",
            numberOfProblem: "150",
            easy: "50",
            medium: "60",
            hard: "40",
            category: "Rest",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["Algorithms", "Data Structures", "Miscellaneous Problems"],
        },
        {
            title: "Graph",
            description: "Graph Questions - 110 problems to master graph theory concepts including traversal, shortest paths, and cycle detection.",
            numberOfProblem: "110",
            easy: "25",
            medium: "55",
            hard: "30",
            category: "Graph",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["Graph", "Graph Algorithms", "BFS", "DFS", "Shortest Path", "Cycle Detection", "Data Structures"],
        },
        {
            title: "Tree",
            description: "Tree Questions - 95 problems to practice binary trees, BSTs, traversals, and recursive patterns.",
            numberOfProblem: "95",
            easy: "30",
            medium: "45",
            hard: "20",
            category: "Tree",
            difficultyLevels: ["Easy", "Medium", "Hard"],
            tags: ["Tree", "Binary Tree", "BST", "Tree Traversal", "Recursion", "Data Structures"],
        }

    ];


    return(
        <>
            <div className={styles.hero}>
                <h1>
                    {title}
                </h1>
                <div>
                    {description}
                </div>
                <SearchQuestion />

                <br />

            </div>

            <div className={styles.dflex}>
                {problemData.map((problem, index) => (
                    <ProblemCard
                        key={index}
                        title={problem.title}
                        description={problem.description}
                        numberOfProblem={problem.numberOfProblem}
                        easy={problem.easy}
                        medium={problem.medium}
                        hard={problem.hard}
                        category={problem.category}
                        difficultyLevels={problem.difficultyLevels}
                        tags={problem.tags}
                    />
                ))}

            </div>

        </>
    )
}

export default Hero;