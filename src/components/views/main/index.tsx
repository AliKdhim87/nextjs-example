import Link from 'next/link'

import styles from './main.module.css'

import Row from 'components/generic/row'
import Grid from 'components/generic/grid'

import type { PostsData } from 'types/post'
import Container from 'components/generic/container'

const { card } = styles

const Main: React.FC<PostsData> = ({ postsData }: PostsData) => {
  return (
    <Container>
      <Row>
        {postsData.map(({ date, slug, title }, index) => (
          <Grid grid={3} key={index}>
            <Link href={`posts/${slug}`}>
              <div key={index} className={card}>
                <h2>{title}</h2>
                <p>Published at: {date}</p>
              </div>
            </Link>
          </Grid>
        ))}
      </Row>
    </Container>
  )
}

export default Main
