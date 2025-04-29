
import styles from './Notification.module.css';


const Notification = ()  => {
    return(<div className={styles.notification}>
        <marquee className={styles.full}><span>Note:</span> We are offering 10% percent discount on every share.</marquee>
    </div>)
}

export default Notification;