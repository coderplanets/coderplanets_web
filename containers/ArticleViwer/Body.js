import React from 'react'

import BodyHeader from './BodyHeader'
import BodyFooter from './BodyFooter'
import { MarkDownRender, ArticleContentLoading } from '../../components'

import { Wrapper, ArticleTitle, ArticleBody } from './styles/body'

const Body = ({ data, loading, thread }) => (
  <Wrapper>
    <BodyHeader thread={thread} />
    <ArticleTitle>{data.title}</ArticleTitle>
    {loading ? (
      <React.Fragment>
        <ArticleContentLoading num={2} />
      </React.Fragment>
    ) : (
      <ArticleBody>
        <MarkDownRender body={data.body} />
      </ArticleBody>
    )}
    <BodyFooter thread={thread} />
  </Wrapper>
)

export default Body
