import styles from './Hero.module.css';
import SearchQuestion from './search.question';
import ProblemCard from "@/components/ProblemCard";

const Hero = ({title, description}) => {
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
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
            </div>

        </>
    )
}

export default Hero;