import styles from './row.module.css'

const Row: React.FC = ({ children }) => {
  return <div className={styles.row}>{children}</div>
}
export default Row
