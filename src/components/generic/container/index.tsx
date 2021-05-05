import styles from './container.module.css'

const { container } = styles

interface Props {
  alignItems?: 'center' | 'start' | 'end'
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, alignItems }: Props) => {
  return (
    <div className={`${container} ${alignItems && styles[`align-items-${alignItems}`]}`}>
      {children}
    </div>
  )
}

export default Container
