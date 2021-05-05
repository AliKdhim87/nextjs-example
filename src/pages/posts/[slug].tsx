import { getAllPostSlugs, getPostData } from 'lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from 'components/global/layout'
import SEO from 'components/global/SEO'
import Container from 'components/generic/container'

function Post({ postData }) {
  return (
    <Layout>
      <SEO title={postData.title} description={postData.title} />
      <Container>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug)

  return {
    props: {
      postData
    }
  }
}

export default Post
