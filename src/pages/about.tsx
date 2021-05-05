import Layout from 'components/global/layout'
import SEO from 'components/global/SEO'
import Container from 'components/generic/container'

import About from 'components/views/about'

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="The about pPageage" description="Learn more about us " />
      <Container>
        <About />
      </Container>
    </Layout>
  )
}

export default AboutPage
