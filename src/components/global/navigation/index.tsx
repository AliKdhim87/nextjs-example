import Link from 'next/link'

import Links from 'components/generic/links'
import Container from 'components/generic/container'

import styles from './navigation.module.css'

const { navigation, navLinks } = styles

const linksData = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  }
]

const Navigation: React.FC = () => {
  return (
    <nav className={navigation}>
      <Container alignItems="center">
        <Link href="/">Logo</Link>
        <Links className={navLinks} items={linksData} />
      </Container>
    </nav>
  )
}

export default Navigation
