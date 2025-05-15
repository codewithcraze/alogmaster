import styles from './SolutionComponent.module.css';
import Link from 'next/link';

const SolutionComponent = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                {/* // eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <Link href="/" className={styles.link}>Home</Link>
                <span className={styles.separator}> › </span>
                <Link className={styles.link} href={`/topics/${data?.category?.slug}`}>
                    {data?.category?.slug?.charAt(0).toUpperCase() + data?.category?.slug?.slice(1)}
                </Link>
                <span className={styles.separator}> › </span>
                <Link className={styles.active} href={data?.slug}>
                    {data?.slug?.charAt(0).toUpperCase() + data?.slug?.slice(1)}
                </Link>

            </div>
            <div>
                <h1>{data?.statement}</h1>
                <div className={styles.tags}>
                    {data?.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag?.charAt(0).toUpperCase() + tag.slice(1)}</span>
                    ))}
                </div>
     
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "5px"}}>
                    <span>Posted on {data?.updatedAt.split("T")[0]}</span>
                    <span className={data?.difficulty === "easy" ? styles.easy : data?.difficulty === "medium" ? styles.medium : styles.hard}>{data?.difficulty.charAt(0).toUpperCase() + data?.difficulty.slice(1)}</span>
                </div>
         
                <div style={{ marginTop: "10px" }}>
                    <h2>Solution</h2>
                    <div dangerouslySetInnerHTML={{ __html: data?.solution }}></div>

                </div>
                <div>
                    <span>Solve this problem on</span> <Link href={data?.link} target="_blank" >Solve</Link>
                </div>
            </div>
        </div>
    )

}

export default SolutionComponent;