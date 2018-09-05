import React from 'react'

import BodyHeader from './BodyHeader'
import BodyFooter from './BodyFooter'
import { MarkDownRender, PostLoading } from '../../components'

import { BodyWrapper, ArticleTitle, ArticleBody } from './styles/body'

const Body = ({ data, loading }) => (
  <BodyWrapper>
    <BodyHeader />
    <ArticleTitle>{data.title}</ArticleTitle>
    {loading ? (
      <React.Fragment>
        <PostLoading num={2} />
      </React.Fragment>
    ) : (
      <ArticleBody>
        <MarkDownRender body={data.body} />
      </ArticleBody>
    )}
    <BodyFooter />
  </BodyWrapper>
)

export default Body
