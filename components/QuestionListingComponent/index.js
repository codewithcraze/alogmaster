import styles from './QuestionListingComponent.module.css';
import Link from 'next/link';

export default function QuestionListingComponent({data}) {
  
  return (
    <main className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        {/* // eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <Link href="/" className={styles.link}>Home</Link>
        <span className={styles.separator}> › </span>
        <span className={styles.active}>{data?.category?.name}</span>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </div>
          <div>
            <h1 className={styles.title}>{data?.category?.name} Problems</h1>
            <p className={styles.subtitle}>{data?.category?.description}</p>
          </div>
        </div>
        {/* <div className={styles.actions}>
          <button className={styles.button}>Filter</button>
          <button className={styles.button}>Sort</button>
        </div> */}
      </div>

      {/* Tags */}
      {/* <div className={styles.tags}>
        {['All', 'Two Pointers', 'Sliding Window', 'Binary Search', 'Sorting', 'Prefix Sum', 'Kadane\'s Algorithm', 'Matrix'].map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div> */}

      {/* Search Bar */}
      {/* <div className={styles.searchWrapper}>
        <input type="text" placeholder="Search array problems..." className={styles.searchInput} />
      </div> */}

      {/* Table */}
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>#</div><div>Title</div><div>Difficulty</div><div>Solution</div>
        </div>
        {/* Dummy rows, replace with .map() */}
        <div >
          {data.data.length !== 0 ? data.data.map((problem, index) => (
            <div className={styles.tableRow} key={index}>
              <div>{index + 1}</div><div>{problem?.statement}</div><div>{problem?.difficulty}</div><div><a href={"/questions/" + problem?.slug}>Solve</a></div>
            </div>
          )) : <div className={styles.noData}>No problems found.</div>}
        </div>
      </div>
    </main>
  );
}
