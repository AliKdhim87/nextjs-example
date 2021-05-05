import styles from './wrapper.module.css'

const Wrapper: React.FC = ({ children }) => <div className={styles.wrapper}>{children}</div>

export default Wrapper
