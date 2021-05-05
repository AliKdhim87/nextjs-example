import { GetStaticProps } from 'next'

import Layout from 'components/global/layout'
import SEO from 'components/global/SEO'
import Main from 'components/views/main'

import type { PostsData } from 'types/post'

import { getSortedPostsData } from 'lib/posts'

const Home: React.FC<PostsData> = ({ postsData }: PostsData) => {
  return (
    <Layout>
      <SEO title="The main page " description="Here ia the mean page " />
      <Main postsData={postsData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getSortedPostsData()

  return {
    props: {
      postsData
    }
  }
}

export default Home
