import styles from './Hero.module.css';
import SearchQuestion from './search.question';

const Hero = ({title, description}) => {
    return(<div className={styles.hero}>
        <h1>
            {title}
        </h1>
        <div>
            {description}
        </div>
        <SearchQuestion />
    </div>)
}

export default Hero;