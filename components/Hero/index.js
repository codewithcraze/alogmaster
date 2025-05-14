import styles from './Hero.module.css';
import SearchQuestion from './search.question';
import ProblemCard from "@/components/ProblemCard";
import Link from "next/link";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getCardData() {
    try{
        const response = await axios.get(`${BASE_URL}/api/dsa/category`);
        if (response.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        const data = response.data.data;
        return data;
    }catch(error){
        console.error("Error fetching card data:", error);
        return [];
    }
}


const Hero = async ({title, description}) => {

    const data = await getCardData();
    const problemData = data.filter((item) => item.type === "dsa");
    const miscellaneousData = data.filter((item) => item.type === "miscellaneous").map((item) => ({
        topic: item.name,
        count: item.easy + item.medium + item.hard,
        slug: item.slug,
    }));;
    
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
                        title={problem.name}
                        slug={problem.slug}
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

            <div>
                <MiscellaneousSection miscellaneousData={miscellaneousData} />
            </div>

        </>
    )
}

function MiscellaneousSection({miscellaneousData}){

    const getQuestionsCatalog = [
       ...miscellaneousData
    ]

    return(
        <div className={styles.lflex}>
            {
                getQuestionsCatalog.map((question, index) => (
                    <Link href={question.slug} key={index}>
                    <div key={index}>
                        <h3>{question.topic}</h3>
                        <p>{question.count} Problems</p>
                    </div>

                    </Link>
                ))
            }
        </div>
    )
}


export default Hero;