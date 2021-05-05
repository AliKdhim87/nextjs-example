import styles from './grid.module.css'

interface Props {
  grid: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  children: React.ReactNode
  className?: string
}

const Grid: React.FC<Props> = ({ children, grid, ...props }: Props) => {
  return (
    <div className={styles['col-' + grid]} {...props}>
      {children}
    </div>
  )
}

export default Grid
