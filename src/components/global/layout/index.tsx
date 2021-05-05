import Footer from 'components/global/footer'
import Navigation from 'components/global/navigation'

import Wrapper from 'components/generic/wrapper'
import Main from 'components/generic/main'

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
