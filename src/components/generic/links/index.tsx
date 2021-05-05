import styles from './links.module.css'
import Link from 'next/link'

interface Props {
  items: {
    path: string
    name: string
  }[]
  className?: string
}

const Links: React.FC<Props> = ({ items, ...props }: Props) => {
  return (
    <ul className={styles.links} {...props}>
      {items.map(({ name, path }, index) => (
        <Link href={path} key={index}>
          {name}
        </Link>
      ))}
    </ul>
  )
}

export default Links
