import styles from './grid.module.css'
import clsx from 'clsx'
type Breakpoints = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
interface Props {
  children: React.ReactNode
  className?: string
  xs?: Breakpoints
  sm?: Breakpoints
  md?: Breakpoints
  lg?: Breakpoints
  xl?: Breakpoints
}

const Grid: React.FC<Props> = ({ children, xs, sm, md, lg, xl, ...props }: Props) => {
  return (
    <div
      className={clsx(
        styles[`col-xs-${xs}`],
        styles[`col-sm-${sm}`],
        styles[`col-md-${md}`],
        styles[`col-lg-${lg}`],
        styles[`col-xl-${xl}`]
      )}
      {...props}>
      {children}
    </div>
  )
}

export default Grid
